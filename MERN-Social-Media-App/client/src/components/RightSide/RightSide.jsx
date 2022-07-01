import TrendCard from '../TrendCard/TrendCard'
import { UilSetting } from '@iconscout/react-unicons'
import HomeImg from '../../img/home.png'
import NotiImg from '../../img/noti.png'
import CommentImg from '../../img/comment.png'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={HomeImg} alt="home" />
        <UilSetting />
        <img src={NotiImg} alt="notification" />
        <img src={CommentImg} alt="comment" />
      </div>

      <TrendCard />

      <button className="btn r-btn">Share</button>
    </div>
  )
}

export default RightSide