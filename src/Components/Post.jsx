import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteButton from '../Components/UI/buttons/DeleteButton'
import CreateButton from '../Components/UI/buttons/CreateButton'
export default function Posts({ post, number, remove }) {
  const route = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <hr className="hr__post" />
        <div>{post.body}</div>
      </div>
      <div className="btn__post">
        <CreateButton onClick={() => route(`/posts/${post.id}`)}>Open</CreateButton>
        <DeleteButton onClick={() => remove(post)}>Delete</DeleteButton>
      </div>
    </div>
  )
}
