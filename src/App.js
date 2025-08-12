import React from "react"
import { clsx } from 'clsx'
import './App.css';
import languages from './fruits';

function App() {
  //state values
  const [currentWord] = React.useState('react')
  const [guessedLetters, setGuessedLetters] = React.useState([])

  //derived values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

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
  
  const keyboardElements = 
        alphabet.split('').map(letter => {
          const isGuessed = guessedLetters.includes(letter)
          const isCorrect = isGuessed && currentWord.includes(letter)
          const isWrong = isGuessed && !currentWord.includes(letter)
          const styles = clsx({
            correct: isCorrect,
            wrong: isWrong
          })

          return <button onClick={() => addGuessed(letter)} key={letter.name} className={styles}>
                  {letter.toUpperCase()}
                </button>
        })
  function renderStatus() {
    if(!isGameOver) {
      return null
    }
    if(isGameWon) {
      return(
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </> 
      )
    }else {
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
    lost:isGameLost
  })

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
    {isGameOver && <button className='newgame-btn'>New Game</button>}
    </main>
  )
}

export default App;
