import React from 'react'
import Posts from './Post'
import '../Styles/App.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Postlist({ posts, remove }) {
  let message
  if (posts.length === 0) {
    message = 'POST NOT FOUND'
  } else {
    message = 'POST LIST'
  }
  return (
    <div>
      <p className="text">{message}</p>
      <TransitionGroup>
        {posts.map((item, index) => {
          return (
            <CSSTransition key={item.id} timeout={500} classNames="post">
              <Posts remove={remove} number={index + 1} post={item} />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}
