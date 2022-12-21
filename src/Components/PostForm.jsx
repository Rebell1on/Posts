import React, { useState } from 'react'
import CreateButton from './UI/buttons/CreateButton'
import MyInput from './UI/inputs/MyInput'

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' })

  function addNewPost(event) {
    event.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form action="">
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        placeholder="Введите название"
      />
      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        placeholder="Введите содержание"
      />
      <CreateButton onClick={addNewPost}>Создать пост</CreateButton>
    </form>
  )
}
