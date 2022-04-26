import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/chat.png'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import axios from 'axios'

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`

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
    if (username.length < 4) {
      toast.warn('Username should be greater than 3 characters')
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
      const res = await axios.post('/api/auth/login', {
        username,
        email,
        password,
      })
      console.log(res.data)
    }
  }

  return (
    <>
      <FormContainer>
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
            onChange={e => changeHandler(e)}
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
      </FormContainer>
    </>
  )
}

export default Register
