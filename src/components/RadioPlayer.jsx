import { useState, useRef, useEffect } from 'react'

function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.7)
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

  return (
    <div className="radio-player">
      <audio ref={audioRef} />
      
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
    </div>
  )
}

export default RadioPlayer