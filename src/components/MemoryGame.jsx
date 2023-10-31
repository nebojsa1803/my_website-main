import { nanoid } from '@reduxjs/toolkit'
import SingleCard from './SingleCard'
import { SectionTitle } from '../components'
import {
  js,
  reactLogo,
  ts,
  tailwind,
  redux,
  router,
} from './../assets/memory-images'
import { useEffect, useState } from 'react'
const cardImages = [
  { img: js, matched: false },
  { img: reactLogo, matched: false },
  { img: redux, matched: false },
  { img: ts, matched: false },
  { img: router, matched: false },
  { img: tailwind, matched: false },
]

const MemoryGame = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiseTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  // duplicate card, randomize order of card with sort method, apply random id for each of 12 cards
  const shuffleCards = () => {
    const shuffeledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: nanoid() }))

    setChoiceOne(null)
    setChoiseTwo(null)
    // every time when button is clicked shuffle cards and reset turns counter
    setCards(shuffeledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiseTwo(card) : setChoiceOne(card)
  }

  // compare two selected
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      // if choiceOne === choiceTwo, we have a match, update card state
      if (choiceOne.img === choiceTwo.img) {
        // take previous cards state and for each card object
        // if card.img matched with what user selected return
        // new updated object with matched true
        setCards((prevCards) => {
          return prevCards.map((prevCard) => {
            if (prevCard.img === choiceOne.img) {
              return { ...prevCard, matched: true }
            } else {
              // not matched, matched property is false
              return prevCard
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choise and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiseTwo(null)
    setTurns((prevTurn) => prevTurn + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div>
      <SectionTitle text='Memory game' />
      <button className='btn btn-accent btn-sm mt-2' onClick={shuffleCards}>
        New Game
      </button>

      <div className='mt-5 grid grid-cols-4 gap-1'>
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              {...card}
              handleChoice={handleChoice}
              flipped={
                choiceOne?.id === card?.id ||
                choiceTwo?.id === card?.id ||
                card.matched
              }
              disabled={disabled}
            />
          )
        })}
      </div>
      <p>Turns: {turns}</p>
    </div>
  )
}

export default MemoryGame
