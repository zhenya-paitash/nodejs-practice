import { UilSearch } from '@iconscout/react-unicons'
import LogoImg from '../../img/logo.png'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={LogoImg} alt='logo' />
      <div className='Search'>
        <input type='text' placeholder='#Explore' />
        <div className='s-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
