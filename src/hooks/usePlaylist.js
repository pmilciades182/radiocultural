import { useState, useRef, useEffect, useCallback } from 'react';
import playlistData from '../data/playlist.json';

// Load SoundCloud Widget API
const loadSoundCloudAPI = () => {
  return new Promise((resolve) => {
    if (window.SC) {
      resolve(window.SC);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.onload = () => {
      resolve(window.SC);
    };
    document.head.appendChild(script);
  });
};

export function usePlaylist() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  const [scWidget, setScWidget] = useState(null);

  const playlist = playlistData.playlist;
  const currentTrack = playlist[currentTrackIndex];

  // Auto-start first track when component mounts (removed to fix pause issue)
  // User must manually start playback

  // Initialize SoundCloud widget
  useEffect(() => {
    if (currentTrack?.type === 'soundcloud') {
      loadSoundCloudAPI().then((SC) => {
        const iframe = document.getElementById('soundcloud-widget');
        if (iframe && SC) {
          const widget = SC.Widget(iframe);
          setScWidget(widget);

          widget.bind(SC.Widget.Events.READY, () => {
            console.log('SoundCloud widget ready');
            setIsLoading(false);
            setError(null);
          });

          widget.bind(SC.Widget.Events.PLAY, () => {
            setIsPlaying(true);
          });

          widget.bind(SC.Widget.Events.PAUSE, () => {
            setIsPlaying(false);
          });

          widget.bind(SC.Widget.Events.FINISH, () => {
            // Auto-advance to next track
            nextTrack();
          });

          widget.bind(SC.Widget.Events.ERROR, () => {
            setError('Error loading SoundCloud track');
            setIsLoading(false);
          });
        }
      });
    }
  }, [currentTrack]);

  // Setup audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
      setError(null);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      // Auto-advance to next track
      nextTrack();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (isPlaying) {
        audio.play().catch(e => {
          console.error("Error playing audio:", e);
          setError(`Error playing: ${e.message}`);
          setIsPlaying(false);
        });
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleError = (e) => {
      console.error("Audio error:", e);
      setError(`Cannot load audio: ${currentTrack?.title || 'Unknown track'}`);
      setIsLoading(false);
      
      // Auto-skip to next track on error immediately for continuous playback
      setTimeout(() => {
        if (playlist.length > 1) {
          nextTrack(); // This will also set isPlaying to true
        }
      }, 1000);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrackIndex, isPlaying]);

  // Update audio source when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    try {
      // Skip regular audio loading for SoundCloud tracks
      if (currentTrack.type === 'soundcloud') {
        setCurrentTime(0);
        setDuration(0);
        setError(null);
        setIsLoading(false);
        return;
      }

      if (currentTrack.streamUrl) {
        audio.src = currentTrack.streamUrl;
        audio.volume = volume;
        setCurrentTime(0);
        setDuration(0);
        setError(null);

        if (isPlaying) {
          audio.load();
        }
      } else {
        setError(`No stream URL available for: ${currentTrack.title}`);
      }
    } catch (e) {
      console.error("Error setting audio source:", e);
      setError(`Invalid audio source: ${currentTrack.title}`);
    }
  }, [currentTrackIndex, currentTrack, volume]);

  // Auto-start playback when track changes (for continuous loop)
  useEffect(() => {
    if (currentTrack && isPlaying) {
      // Small delay to ensure audio is loaded
      const timer = setTimeout(() => {
        if (currentTrack.type === 'soundcloud' && scWidget) {
          scWidget.play();
        } else if (audioRef.current && currentTrack.streamUrl) {
          audioRef.current.play().catch(e => {
            console.error("Auto-play failed:", e);
            // If auto-play fails, try next track
            setTimeout(() => nextTrack(), 1000);
          });
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentTrackIndex, currentTrack, scWidget]);

  // Control playback state for regular audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || currentTrack?.type === 'soundcloud') return;

    if (isPlaying && currentTrack?.streamUrl) {
      audio.play().catch(e => {
        console.error("Error playing audio:", e);
        // Try next track on error
        setTimeout(() => nextTrack(), 1000);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const togglePlay = useCallback(() => {
    if (currentTrack?.type === 'soundcloud' && scWidget) {
      if (isPlaying) {
        scWidget.pause();
        setIsPlaying(false);
      } else {
        scWidget.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(prev => !prev);
    }
  }, [currentTrack, scWidget, isPlaying]);

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex(prev => (prev + 1) % playlist.length);
    // Keep playing when auto-advancing
    setIsPlaying(true);
  }, [playlist.length]);

  const previousTrack = useCallback(() => {
    setCurrentTrackIndex(prev => (prev - 1 + playlist.length) % playlist.length);
    // Keep playing when manually navigating
    setIsPlaying(true);
  }, [playlist.length]);

  const changeVolume = useCallback((newVolume) => {
    setVolume(newVolume);
    if (currentTrack?.type === 'soundcloud' && scWidget) {
      scWidget.setVolume(newVolume * 100); // SoundCloud expects 0-100
    } else if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, [currentTrack, scWidget]);

  const seekTo = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  return {
    // State
    currentTrack,
    currentTrackIndex,
    isPlaying,
    volume,
    duration,
    currentTime,
    playlist,
    audioRef,
    isLoading,
    error,
    
    // Actions
    togglePlay,
    nextTrack,
    previousTrack,
    changeVolume,
    seekTo
  };
}