import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './index.css'

const listItems = count =>
  Array.from({ length: count }, (i, idx) => idx).map(i => ({
    id: `item-${i}`,
    content: `item ${i}`,
  }))

function App() {
  const [list, setList] = useState(listItems(10))

  const dragEndHandler = res => {
    console.log(res)
    if (!res.destination) {
      return
    }
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId='droppable'>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
