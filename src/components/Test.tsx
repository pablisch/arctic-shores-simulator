import React, { useState, useEffect, useCallback } from 'react'

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
    <div className="p-4 text-center">
      {!gameOver ? (
        <>
          <h1 className="text-2xl mb-4">Number: {number}</h1>
          <p className="mb-4">
            Press "Q" if the number is &lt; 10, otherwise press "P".
          </p>
          <p>Score: {score}</p>
          <p>Can press: {canPress ? 'true' : 'false'}</p>
        </>
      ) : (
        <div className="text-red-600">
          <h2 className="text-2xl mb-4">Game Over!</h2>
          <p className="mb-4">Your final score: {score}</p>
          <button
            onClick={resetGame}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default ReactionGame
