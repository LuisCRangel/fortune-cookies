import { useState } from 'react'
import './App.css'
import PhraseBox from './components/PhraseBox'
import phrase from './utils/phrases.json'
import ButtonPhrase from './components/ButtonPhrase'

function App() {

const randomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const arrBackground = [1, 2, 3, 4]

const initialPhrase = randomElement(phrase)
const initialPath = randomElement(arrBackground)
const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
const [pathRandom, setPathRandom] = useState(initialPath)

const handleClick = () =>{
  setPhraseRandom(randomElement(phrase))
  setPathRandom(randomElement(arrBackground))
}

const objStyle = {
  backgroundImage : `url('/images/fondo${pathRandom}.jpg')`
}

  return (
    <div style={objStyle} className='App'>
      <h1 className='title'>Galletas de la fortuna</h1>
      <PhraseBox phraseRandom ={phraseRandom}/>
      <ButtonPhrase handleClick={handleClick}/>   
    </div>
  )
}

export default App
