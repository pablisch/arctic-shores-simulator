import React, { useState, useEffect, useCallback } from 'react'
import './ReactionGame.css'

function getRandomNumber(): number {
  return Math.floor(Math.random() * 18) + 1
}

const ReactionGame: React.FC = () => {
  const [number, setNumber] = useState<number>(getRandomNumber())
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [canPress, setCanPress] = useState(true)

  const generateNumber = useCallback(() => {
    return getRandomNumber()
  }, [])

  useEffect(() => {
    if (!gameOver) {
      setCanPress(true)

      const interval = setInterval(() => {
        setNumber(generateNumber())
        setCanPress(true)
      }, 2000)

      const handleKeyPress = (event: KeyboardEvent) => {
        if (gameOver || !canPress) return

        setCanPress(false)

        const isCorrect =
          (event.key === 'q' && number < 10) ||
          (event.key === 'p' && number >= 10)

        if (isCorrect) {
          setScore(prevScore => prevScore + 1)
        }
      }

      window.addEventListener('keydown', handleKeyPress)

      return () => {
        clearInterval(interval)
        window.removeEventListener('keydown', handleKeyPress)
      }
    }
  }, [number, gameOver, generateNumber])

  const resetGame = () => {
    setNumber(generateNumber())
    setScore(0)
    setGameOver(false)
    setCanPress(true)
  }

  return (
    <div className="game-container">
      {!gameOver ? (
        <div className="game-on">
          <div className={`pattern-container ${canPress ? '' : 'pressed'}`}>
            <h1 className={`pattern ${canPress ? '' : 'pressed'}`}>{number}</h1>
          </div>
          <div className="game-info">
            <p className="instructions">
              Press "Q" if the number is &lt; 10, otherwise press "P".
            </p>
            <p className="score">Score: {score}</p>
            <p className="can-press">
              Can press: {canPress ? 'true' : 'false'}
            </p>
          </div>
        </div>
      ) : (
        <div className="game-over">
          <h2 className="game-over-heading">Game Over!</h2>
          <p className="final-score">Your final score: {score}</p>
          <button className="reset-game" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default ReactionGame
