import React from 'react'
import cl from './Modal.module.css'
export default function Modal({ visible, children, setVisible }) {
  const classes = [cl.myModal]
  const classCont = [cl.myContent]
  if (visible) {
    classes.push(cl.active)
    classCont.push(cl.active)
  }

  return (
    <div className={classes.join(' ')} onClick={() => setVisible(false)}>
      <div className={classCont.join(' x ')} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
