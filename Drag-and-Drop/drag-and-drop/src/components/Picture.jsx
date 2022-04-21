import { useDrag } from 'react-dnd'

const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <img
      ref={drag}
      src={url}
      alt={id + '-' + url}
      style={{ border: isDragging ? '2px solid lightgrey' : '0px' }}
    />
  )
}
export default Picture
