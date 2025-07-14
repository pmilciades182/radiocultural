import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, Heart } from 'lucide-react';
import { usePlaylist } from '../hooks/usePlaylist';
import './RadioPlayer.css';

function RadioPlayer({ isMinimized }) {
  const {
    currentTrack,
    isPlaying,
    volume,
    audioRef,
    togglePlay,
    changeVolume
  } = usePlaylist();

  const handleVolumeChange = (e) => {
    changeVolume(parseFloat(e.target.value));
  };

  return (
    <div className={`radio-player-container ${isMinimized ? 'scrolled' : ''}`}>
      {/* Regular audio element for direct streams */}
      {currentTrack?.type !== 'soundcloud' && <audio ref={audioRef} />}
      
      {/* SoundCloud iframe embed */}
      {currentTrack?.type === 'soundcloud' && (
        <div className="soundcloud-embed" style={{display: 'none'}}>
          <iframe
            id="soundcloud-widget"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={currentTrack.embedUrl}
          />
        </div>
      )}

      <div className="radio-player">
        <div className={`player-info ${isMinimized ? 'hidden' : ''}`}>
          <div className="radio-identity">
            <div className="radio-title">
              <h2>Radio Cultural</h2>
              <p>Desde Limpio, Paraguay</p>
            </div>
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
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <span className="volume-value">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioPlayer;