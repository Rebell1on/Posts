import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import '../../../Styles/App.css'
import cl from '../buttons/DeleteButton.module.css'
export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navigation">
      <div className="nav__links">
        <Link className="links" to="/about">
          ABOUT
        </Link>
        <Link className="links" to="/posts">
          POSTS
        </Link>
        {isAuth ? (
          <button className={cl.quitButton} onClick={logout}>
            QUIT
          </button>
        ) : null}
      </div>
    </div>
  )
}
