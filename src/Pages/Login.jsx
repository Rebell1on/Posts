import React, { useContext } from 'react'
import CreateButton from '../Components/UI/buttons/CreateButton'
import MyInput from '../Components/UI/inputs/MyInput'
import { AuthContext } from '../context'

export default function Login() {
  const { setIsAuth } = useContext(AuthContext)
  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'Caveat', textAlign: 'center' }}>Сраница для логина</h1>
      <form onSubmit={login} action="">
        <MyInput placeholder="Введите логин" type="text" />
        <MyInput placeholder="Введите логин" type="password" />
        <CreateButton>Войти</CreateButton>
      </form>
    </div>
  )
}
