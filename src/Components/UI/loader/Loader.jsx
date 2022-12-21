import React from 'react'
import cl from './Loader.module.css'
export default function Loader() {
  return (
    <div>
      <h1 className={cl.loading}>Loading...</h1>
      <div className={cl.firstLoad}>
        <div className={cl.secondLoad}></div>
      </div>
    </div>
  )
}
