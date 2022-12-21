import React from 'react'
import cl from '../Components/UI/inputs/MyInput.module.css'
import CreateButton from './UI/buttons/CreateButton'
import DeleteButton from './UI/buttons/DeleteButton'
export default function PostId(props) {
  return (
    <>
      <strong>
        {props.isEditTile ? (
          <textarea
            onChange={(e) => props.setClone({ ...props.clone, title: e.target.value })}
            value={props.clone.title}
            className={cl.myEdit}
            cols="30"
            rows="10"
          />
        ) : (
          `${props.post.id}. ${props.post.title}`
        )}
        <div>
          {!props.isEditTile && (
            <CreateButton onClick={() => props.startEdit(props.setIsEditTile, props.setClone)}>Edit</CreateButton>
          )}
        </div>
        {props.isEditTile && (
          <CreateButton
            onClick={() => props.acceptEdit(props.setIsEditTile, props.setPost)}
            style={{ marginRight: '20px' }}
          >
            Accept
          </CreateButton>
        )}
        {props.isEditTile && <DeleteButton onClick={() => props.cancelEdit(props.setIsEditTile)}>Cancel</DeleteButton>}
      </strong>
      <hr className="hr__post" />
      <div>
        {props.isEditBody ? (
          <textarea
            onChange={(e) => props.setClone({ ...props.clone, body: e.target.value })}
            value={props.clone.body}
            className={cl.myEdit}
            cols="30"
            rows="10"
          />
        ) : (
          `${props.post.body}`
        )}
        <div>
          {!props.isEditBody && (
            <CreateButton onClick={() => props.startEdit(props.setIsEditBody, props.setClone)}>Edit</CreateButton>
          )}
        </div>
        {props.isEditBody && (
          <CreateButton
            onClick={() => props.acceptEdit(props.setIsEditBody, props.setPost)}
            style={{ marginRight: '20px' }}
          >
            Accept
          </CreateButton>
        )}
        {props.isEditBody && <DeleteButton onClick={() => props.cancelEdit(props.etIsEditBody)}>Cancel</DeleteButton>}
      </div>
    </>
  )
}
