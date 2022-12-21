import React from 'react'

export default function Comment({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div style={{ marginTop: '100px' }} key={comment.id}>
            <span style={{ fontWeight: 'bold' }}>
              {comment.id}. {comment.title}
            </span>
            <p>Name: {comment.name}</p>
            <hr className="hr__post" />
            <p>Email: {comment.email}</p>
            <hr className="hr__post" />
            <p>{comment.body}</p>
            <hr className="hr__post" />
          </div>
        )
      })}
    </div>
  )
}
