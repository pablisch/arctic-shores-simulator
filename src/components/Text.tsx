import React, { useState, useEffect, useCallback } from 'react'

// Declare the random number generation function
function getRandomNumber(): number {
  return Math.floor(Math.random() * 18) + 1
}

const ReactionGame: React.FC = () => {
  const [number, setNumber] = useState<number>(getRandomNumber())
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [pressReceived, setPressReceived] = useState<boolean>(false)

  // Use useCallback to memoize the random number generation
  const generateNumber = useCallback(() => {
    return getRandomNumber()
  }, [])

  // Rest of the component remains the same as in the previous artifact
  useEffect(() => {
    setPressReceived(false)
    if (!gameOver) {
      const interval = setInterval(() => {
        setNumber(generateNumber())
      }, 2000)

      const handleKeyPress = (event: KeyboardEvent) => {
        if (gameOver || pressReceived) return

        let isCorrect = false
        setPressReceived(true)
        if (event.key === 'q' && number < 10) {
          isCorrect = true
        } else if (event.key === 'p' && number >= 10) {
          isCorrect = true
        }

        if (isCorrect) {
          setScore(prevScore => prevScore + 1)
        }
        setNumber(generateNumber())
      }

      window.addEventListener('keydown', handleKeyPress)

      return () => {
        clearInterval(interval)
        window.removeEventListener('keydown', handleKeyPress)
      }
    }
  }, [number, gameOver, pressReceived, generateNumber])

  const resetGame = () => {
    setNumber(generateNumber())
    setScore(0)
    setGameOver(false)
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
          <p>Game over? {gameOver ? 'true' : 'false'}</p>
          <p>PressReceived?: {pressReceived ? 'true' : 'false'}</p>
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

// import React, { useState, useEffect } from 'react'
//
// const ReactionGame: React.FC = () => {
//   const [number, setNumber] = useState<number>(getRandomNumber())
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNumber(getRandomNumber())
//     }, 2000) // Change number every 2 seconds
//
//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (event.key === 'q' && number < 10) {
//         console.log('Q', number, event.key)
//       } else if (event.key === 'p' && number > 9) {
//         console.log('P', number, event.key)
//       } else {
//         console.log('WRONG', event.key)
//       }
//     }
//
//     window.addEventListener('keydown', handleKeyPress)
//
//     return () => {
//       clearInterval(interval)
//       window.removeEventListener('keydown', handleKeyPress)
//     }
//   }, [number])
//
//   function getRandomNumber(): number {
//     return Math.floor(Math.random() * 18) + 1
//   }
//
//   return (
//     <div>
//       <h1>Number: {number}</h1>
//       <p>Press "Q" if the number is &lt; 10, otherwise press "P".</p>
//     </div>
//   )
// }
//
// export default ReactionGame
