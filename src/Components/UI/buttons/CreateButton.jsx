import React from 'react'
import cl from './DeleteButton.module.css'
export default function CreateButton(props) {
  return (
    <button className={cl.createButton} {...props}>
      {props.children}
    </button>
  )
}
