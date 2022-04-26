// import { Component } from './components'
import { Login, Register, Chat } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Chat />} />
        </Routes>
      </Router>
      <ToastContainer
        hideProgressBar
        autoClose={4000}
        theme='dark'
        limit={6}
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App
