import { useState, useRef, useEffect } from 'react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef(null)

  const tracks = [
    '/audio/paraguayan-folk-1.mp3',
    '/audio/paraguayan-folk-2.mp3',
    '/audio/paraguayan-folk-3.mp3'
  ]

  const trackNames = [
    'Música Folclórica Paraguaya 1',
    'Música Folclórica Paraguaya 2', 
    'Música Folclórica Paraguaya 3'
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length)
      }
      audio.addEventListener('ended', handleEnded)
      return () => audio.removeEventListener('ended', handleEnded)
    }
  }, [tracks.length])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack]
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentTrack, tracks])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`radio-player-container ${isExpanded ? 'expanded' : ''}`}>
      <audio ref={audioRef} />
      
      {isExpanded && (
        <div className="expanded-player">
          <div className="video-simulation">
            <div className="video-content">
              <div className="live-studio">
                <div className="studio-background"></div>
                <div className="audio-waves">
                  <div className="wave wave-1"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave wave-3"></div>
                  <div className="wave wave-4"></div>
                </div>
                <div className="radio-logo">
                  <h3>Radio Cultural</h3>
                  <div className="live-indicator-video">
                    <span className="live-dot"></span>
                    EN VIVO
                  </div>
                </div>
              </div>
            </div>
            <div className="video-overlay">
              <div className="current-track-display">
                <h4>Ahora suena:</h4>
                <p>{trackNames[currentTrack]}</p>
              </div>
            </div>
          </div>
          
          <div className="expanded-controls">
            <div className="player-info-expanded">
              <div className="track-info">
                <div className="track-name-large">{trackNames[currentTrack]}</div>
                <div className="artist-name">Radio Cultural - Limpio, Paraguay</div>
              </div>
            </div>
            
            <div className="main-controls">
              <button onClick={prevTrack} className="control-btn-large">⏮</button>
              <button onClick={togglePlay} className="play-btn-large">
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button onClick={nextTrack} className="control-btn-large">⏭</button>
            </div>
            
            <div className="expanded-volume">
              <span>🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volume-slider-large"
              />
              <span className="volume-value">{Math.round(volume * 100)}%</span>
            </div>
          </div>
          
          <div className="ad-banner">
            <div className="ad-content">
              <span>📢</span>
              <div className="ad-text">
                <strong>Apoyá Radio Cultural</strong>
                <p>Tu donación mantiene viva nuestra cultura</p>
              </div>
              <button className="ad-button">Donar</button>
            </div>
          </div>
        </div>
      )}
      
      <div className="radio-player">
        <div className="player-info">
          <div className="live-indicator">
            <span className="live-dot"></span>
            EN VIVO
          </div>
          <div className="track-name">{trackNames[currentTrack]}</div>
        </div>
        
        <div className="player-controls">
          <button onClick={prevTrack} className="control-btn">⏮</button>
          <button onClick={togglePlay} className="play-btn">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button onClick={nextTrack} className="control-btn">⏭</button>
        </div>
        
        <div className="volume-control">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="volume-slider"
          />
        </div>
        
        <button onClick={toggleExpanded} className="expand-btn">
          {isExpanded ? '🔽' : '🔼'}
        </button>
      </div>
    </div>
  )
}

export default RadioPlayer