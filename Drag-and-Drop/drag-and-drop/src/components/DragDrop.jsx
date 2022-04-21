import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Picture from './Picture'

const PictureList = [
  { id: 1, url: 'https://avatars.githubusercontent.com/u/9614814?v=4' },
  { id: 2, url: 'https://avatars.githubusercontent.com/u/18209477?v=4' },
  { id: 3, url: 'https://avatars.githubusercontent.com/u/40229991?v=4' },
]

const DragDrop = () => {
  const [board, setBoard] = useState([])
  const [{ isOver }, drop] = useDrop({
    accept: 'image',
    drop: item => addImageToBoard(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  function addImageToBoard(id) {
    const newImg = PictureList.find(img => img.id === id)
    setBoard([...board, newImg])
  }

  return (
    <>
      <div className='Pictures'>
        {PictureList.map(pic => (
          <Picture
            url={pic.url}
            id={pic.id}
            key={pic.id + new Date().getTime()}
          />
        ))}
      </div>
      <div className='Board' ref={drop}>
        {board.map(pic => (
          <Picture
            url={pic.url}
            id={pic.id}
            // key={pic.id + new Date().getTime()}
          />
        ))}
      </div>
    </>
  )
}

export default DragDrop
