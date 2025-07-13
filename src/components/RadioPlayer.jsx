import { useState, useRef, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  Volume2, 
  Radio,
  Music,
  Maximize2,
  Minimize2,
  Heart
} from 'lucide-react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef(null)

  const radioStream = '/audio/radio-cultural-stream.mp3' // Stream único
  const currentProgram = 'Música Folclórica Paraguaya en Vivo'

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = radioStream
      audioRef.current.loop = true // Stream continuo
    }
  }, [])

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

  // Sin navegación de tracks - solo radio stream continuo

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  if (isExpanded) {
    return (
      <div className="radio-player-container expanded">
        <audio ref={audioRef} />
        
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
                  <Radio size={32} color="white" />
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
                <Music size={16} />
                <div>
                  <h4>En vivo:</h4>
                  <p>{currentProgram}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="expanded-controls">
            <div className="player-info-expanded">
              <div className="track-info">
                <div className="track-name-large">{currentProgram}</div>
                <div className="artist-name">Radio Cultural - Limpio, Paraguay</div>
              </div>
            </div>
            
            <div className="main-controls">
              <button onClick={togglePlay} className="play-btn-large">
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
            </div>
            
            <div className="expanded-volume">
              <Volume2 size={18} />
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
            
            <button onClick={toggleExpanded} className="expand-btn-large">
              <Minimize2 size={18} />
              <span>Minimizar</span>
            </button>
          </div>
          
          <div className="ad-banner">
            <div className="ad-content">
              <Heart size={20} />
              <div className="ad-text">
                <strong>Apoyá Radio Cultural</strong>
                <p>Tu donación mantiene viva nuestra cultura</p>
              </div>
              <button className="ad-button">Donar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="radio-player-container">
      <audio ref={audioRef} />
      
      <div className="radio-player">
        <div className="player-info">
          <div className="live-indicator">
            <span className="live-dot"></span>
            <Radio size={14} />
            <span>EN VIVO</span>
          </div>
          <div className="track-name">{currentProgram}</div>
        </div>
        
        <div className="player-controls">
          <button onClick={togglePlay} className="play-btn">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
        
        <div className="volume-control">
          <Volume2 size={16} />
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
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  )
}

export default RadioPlayer