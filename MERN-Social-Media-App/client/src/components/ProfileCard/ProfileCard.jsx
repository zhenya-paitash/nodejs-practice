import CoverImg from '../../img/cover.jpg'
import ProfileImg from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={CoverImg} alt='CoverImg' />
        <img src={ProfileImg} alt='ProfileImg' />
      </div>

      <div className='ProfileName'>
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
