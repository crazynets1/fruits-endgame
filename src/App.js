import React from "react"
import { clsx } from 'clsx'
import './App.css';
import languages from './fruits';
import { getRandomWord, getFarewellText } from "./utils";

function App() {
  //state values
  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = React.useState([])

  //derived values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuess = guessedLetters[guessedLetters.length - 1]
  const incorrectLastGuess = lastGuess && !currentWord.includes(lastGuess)

  //static values
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  function addGuessed(letter, index) {
    setGuessedLetters(oldGuessedLetters => {
      return guessedLetters.includes(letter) ? oldGuessedLetters : [...oldGuessedLetters, letter]
    })}

  const langElements = languages.map((lang, index) => {
    const isLangLost = index < wrongGuessCount
    const myStyle = clsx('chip', {lost : isLangLost})
    const styles ={
      backgroundColor: lang.backgroundColor,
      color:lang.color
    }
    return <span className={myStyle} key={lang.name} style={styles}>{lang.name}</span>
  })

  const wordElements = currentWord.split('').map(letter => {
    return <span>{guessedLetters.includes(letter) ? letter.toUpperCase() : ''}</span>
  })
  
  function renderStatus() {
    if(!isGameOver && incorrectLastGuess) {
      return (<p className="farewell-message">
        {getFarewellText(languages[wrongGuessCount - 1].name)} 💀
        </p>
    )}
    if(isGameWon) {
      return(
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </> 
      )
    }
    if (isGameOver) {
      return (
        <>
          <h2>You Lost!</h2>
          <p>You better start learning Assembly!</p>
        </>  
      )
    }
  }
  const className = clsx('status-message', {
    won: isGameWon,
    lost:isGameLost,
    farewell: !isGameOver && incorrectLastGuess
  })

const keyboardElements = 
        alphabet.split('').map(letter => {
          const isGuessed = guessedLetters.includes(letter)
          const isCorrect = isGuessed && currentWord.includes(letter)
          const isWrong = isGuessed && !currentWord.includes(letter)
          const styles = clsx({
            correct: isCorrect,
            wrong: isWrong
          })

      return(
        <button 
        onClick={() => addGuessed(letter)} 
        key={letter.name} className={styles} 
        disabled={isGameOver}
        aria-label={letter}>
          {letter.toUpperCase()}
        </button>
    )
  })

  function renderNewGame() {
    setGuessedLetters([])
    setCurrentWord(getRandomWord())
  }

  return (
    <main>
      <section className='header'>
      <h1>Fruits: Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the programming 
        world safe from Assembly!
      </p>
    </section>
    <section className={className}>
      {renderStatus()}
    </section>
    <section className='languages-section'>
      {langElements}
    </section>
    <section className='word'>
      {wordElements}
    </section>
    <section className='keyboard'>
      {keyboardElements}
    </section>
    {
      <button 
      className='newgame-btn' 
      onClick={() => renderNewGame()} 
      disabled={!isGameOver}
      aria-label="new game button">
        New Game
      </button>
    }
    </main>
  )
}

export default App;
