import CommentImg from '../../img/comment.png'
import ShareImg from '../../img/share.png'
import HeartImg from '../../img/like.png'
import NotLikeImg from '../../img/notlike.png'
import './Post.css'

const Post = ({ post }) => {
  const { img, name, desc, likes, liked } = post

  return (
    <div className='Post'>
      <img src={img} alt={name} />

      <div className='postReact'>
        <img src={liked ? HeartImg : NotLikeImg} alt='like' />
        <img src={CommentImg} alt='comment' />
        <img src={ShareImg} alt='share' />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className='details'>
        <span>
          <b>{name}</b>
        </span>
        <span> {desc}</span>
      </div>
    </div>
  )
}

export default Post
