import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/chat.png'
import { toast } from 'react-toastify'
import axios from 'axios'
import './Register.scss'

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const validationHandler = () => {
    const { password, confirmPassword, username } = form
    if (username.length < 3) {
      toast.warn('Username should include at least 3 characters')
      return false
    } else if (password.length < 8) {
      toast.warn('Password must contain at least 8 character')
      return false
    } else if (password !== confirmPassword) {
      toast.warn('Passwords do not match')
      return false
    }

    return true
  }

  const submitHandler = async e => {
    e.preventDefault()
    console.log(form)
    if (validationHandler()) {
      const { username, email, password } = form
      const res = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      })
      console.log(res.data)
    }
  }

  return (
    <div className='form'>
      <form onSubmit={e => submitHandler(e)}>
        <div className='brand'>
          <img src={Logo} alt='logo' />
          <h1>chat message</h1>
        </div>
        <input
          type='text'
          placeholder='Username'
          name='username'
          id='username'
          value={form.username}
          onChange={changeHandler}
          required
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          id='email'
          value={form.email}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          id='password'
          value={form.password}
          onChange={e => changeHandler(e)}
          required
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          id='confirmPassword'
          value={form.confirmPassword}
          onChange={e => changeHandler(e)}
          required
        />

        <button type='submit'>Create User</button>
        <span>
          already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
