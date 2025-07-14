import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, Heart } from 'lucide-react';
import './RadioPlayer.css';

const RADIO_STREAM_URL = '/audio/radio-cultural-stream.mp3';
const CURRENT_PROGRAM = 'Música Folclórica Paraguaya en Vivo';

function RadioPlayer({ isMinimized }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // Efecto para manejar la lógica del audio (play, pause, volumen)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = RADIO_STREAM_URL;
    audio.loop = true;
    audio.volume = volume;

    if (isPlaying) {
      audio.play().catch(e => console.error("Error al reproducir audio:", e));
    } else {
      audio.pause();
    }
  }, [isPlaying, volume]);



  const togglePlay = useCallback(() => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }, []);

  const handleVolumeChange = useCallback((e) => {
    setVolume(parseFloat(e.target.value));
  }, []);

  return (
    <div className={`radio-player-container ${isMinimized ? 'scrolled' : ''}`}>
      <audio ref={audioRef} />

      <div className="radio-player">
        <div className={`player-info ${isMinimized ? 'hidden' : ''}`}>
          <div className="radio-identity">
            <div className="radio-title">
              <h2>Radio Cultural</h2>
              <p>Desde Limpio, Paraguay</p>
            </div>
            <div className="track-name">{CURRENT_PROGRAM}</div>
          </div>

          <Link to="/donaciones" className="donation-link">
            <Heart size={24} className="donation-heart" />
            <div className="donation-text">
              <span className="donation-label">Donaciones</span>
              <span className="donation-subtitle">Apoyá la cultura</span>
            </div>
          </Link>
        </div>

        <div className="player-actions">
          <div className="player-controls">
            <button onClick={togglePlay} className="play-btn" aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              <span className="control-label">{isPlaying ? 'Pausar' : 'Escuchar'}</span>
            </button>
          </div>

          <div className="volume-control">
            <Volume2 size={24} />
            <span className="control-label">Volumen</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioPlayer;