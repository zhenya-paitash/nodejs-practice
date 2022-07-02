import LogoImg from '../../img/logo.png'
import './Auth.css'

const Auth = () => {
  return (
    <div className='Auth'>
      <div className='a-left'>
        <img src={LogoImg} alt='logo' />
        <div className='Webname'>
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* <Signup /> */}
      <Login />
    </div>
  )
}

function Signup() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Sign Up</h3>

        <div>
          <input
            type='text'
            name='firstname'
            placeholder='First name'
            className='infoInput'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last name'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            name='password'
            placeholder='Password'
            className='infoInput'
          />
          <input
            type='text'
            name='confirmpass'
            placeholder='Confirm Password'
            className='infoInput'
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Already have an account. Login!
          </span>
          <button className='btn info-btn' type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

function Login() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Log In</h3>

        <div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            name='password'
            placeholder='Password'
            className='infoInput'
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Don't have an account? Sign Up
          </span>
          <button className='btn info-btn' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Auth
