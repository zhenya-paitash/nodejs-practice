import { useState } from 'react'
import './App.css'

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, title: 'CARD 3' },
    { id: 2, order: 1, title: 'CARD 1' },
    { id: 3, order: 2, title: 'CARD 2' },
    { id: 4, order: 4, title: 'CARD 4' },
  ])
  const [currentCard, setCurrentCard] = useState(null)

  // DRAG & DROP handlers
  function dragStartHandler(e, card) {
    console.log('start', e)
    setCurrentCard(e)
  }
  function dragLeaveHandler(e) {
    e.target.style.background = 'white'
  }
  function dragEndHandler(e, card) {
    console.log('END', e)
    e.preventDefault()
    setCardList(
      cardList.sort(sortCards).map(i => {
        if (i.id === card.id) {
          return { ...i, order: currentCard.order }
        }
        if (i.id === currentCard.id) {
          return { ...i, order: card.order }
        }
        return i
      })
    )
    e.target.style.background = 'white'
  }
  function dragOverHandler(e) {
    e.target.style.background = 'lightgray'
  }
  function dropHandler(e, card) {
    console.log('drop', card)
    setCardList(
      cardList.sort(sortCards).map(i => {
        if (i.id === card.id) {
          return { ...i, order: currentCard.order }
        }
        if (i.id === currentCard.id) {
          return { ...i, order: card.order }
        }
        return i
      })
    )
    e.target.style.background = 'white'
  }

  const sortCards = (a, b) => (a.order > b.order ? 1 : -1)

  return (
    <div className='app'>
      {cardList.map((card, idx) => (
        <div
          onDragStart={e => dragStartHandler((e, card))}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragEnd={e => dragEndHandler(e, card)}
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropHandler((e, card))}
          draggable={true}
          className='card'
          key={card.id + '-' + idx}
        >
          {card.title}
        </div>
      ))}
    </div>
  )
}

export default App
