import React from 'react'

const PhraseBox = ({phraseRandom}) => {
  return (

    <div className='box'>
      <p>{phraseRandom.phrase}</p>
      <i class='bx bxs-quote-alt-right box__icon'></i>
      </div>
  )
}

export default PhraseBox