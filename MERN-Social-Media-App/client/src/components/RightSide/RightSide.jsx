import { useState } from 'react'
import { UilSetting } from '@iconscout/react-unicons'
import HomeImg from '../../img/home.png'
import NotiImg from '../../img/noti.png'
import CommentImg from '../../img/comment.png'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import './RightSide.css'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <img src={HomeImg} alt='home' />
        <UilSetting />
        <img src={NotiImg} alt='notification' />
        <img src={CommentImg} alt='comment' />
      </div>

      <TrendCard />

      <button className='btn r-btn' onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide
