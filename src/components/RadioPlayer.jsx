import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Play, 
  Pause, 
  Volume2, 
  Radio,
  Heart
} from 'lucide-react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
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

  return (
    <div className="radio-player-container">
      <audio ref={audioRef} />
      
      <div className="radio-player">
        <div className="player-info">
          <div className="radio-identity">
            <div className="radio-title">
              <h2>Radio Cultural</h2>
              <p>Desde Limpio, Paraguay</p>
            </div>
            <div className="track-name">{currentProgram}</div>
          </div>
          
          <Link to="/donaciones" className="donation-link">
            <Heart size={24} className="donation-heart" />
            <div className="donation-text">
              <span className="donation-label">Donaciones</span>
              <span className="donation-subtitle">Apoyá la cultura</span>
            </div>
          </Link>
        </div>
        
        <div className="player-controls">
          <button onClick={togglePlay} className="play-btn">
            {isPlaying ? <Pause size={40} /> : <Play size={40} />}
          </button>
        </div>
        
        <div className="volume-control">
          <Volume2 size={32} />
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
      </div>
    </div>
  )
}

export default RadioPlayer