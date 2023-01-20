import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './Styles/App.css'
import Navbar from './Components/UI/navbar/Navbar'
import Navigation from './Components/UI/navigation/Navigation'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true) //eslint-disable-next-line
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  })

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Navigation />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
