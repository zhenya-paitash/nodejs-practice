import React, { FC, useContext, useEffect, useState } from 'react'
import { Context } from './index'
import LoginForm from './components/LoginForm'
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser'
import UserService from './services/UserService'

const App: FC = () => {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [store])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  if (store.isLoading) return <div>Loading...</div>
  if (!store.isAuth) return <LoginForm />
  return (
    <div>
      <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ!'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден' : 'ПОДТВЕРДИТЕ АККАУНТ!'}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <button onClick={getUsers}>Получить список пользователей</button>
      {users.map(user => 
        <div key={user.email}>{user.email}</div>
      )}
    </div>
  )
}

export default observer(App)