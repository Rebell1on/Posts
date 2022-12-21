import React from 'react'
import cl from './DeleteButton.module.css'
export default function DeleteButton(props) {
  return (
    <button className={cl.myButton} {...props}>
      {props.children}
    </button>
  )
}
