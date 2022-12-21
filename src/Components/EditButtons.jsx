import React from 'react'
import CreateButton from './UI/buttons/CreateButton'
import Modal from './Modal/Modal'
import PostForm from './PostForm'
export default function EditButtons(props) {
  return (
    <div>
      <CreateButton onClick={() => props.setVisible(true)}>Add</CreateButton>
      <CreateButton onClick={() => props.removeAll()}>Delete all</CreateButton>
      <Modal visible={props.visible} setVisible={props.setVisible}>
        <PostForm create={props.createPost} />
      </Modal>
    </div>
  )
}
