import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
