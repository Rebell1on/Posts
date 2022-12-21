import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API Service/PostService'
import CreateButton from '../Components/UI/buttons/CreateButton'
import Loader from '../Components/UI/loader/Loader'
import { useFetch } from '../Hooks/useFetch'
import Comment from '../Components/Comment'
import PostId from '../Components/PostIdTitle'

export default function PostIdPage() {
  const [isEditTile, setIsEditTile] = useState(false)
  const [isEditBody, setIsEditBody] = useState(false)
  const [visible, setVisible] = useState(false)
  const params = useParams()

  const [comments, setComments] = useState([])
  const [post, setPost] = useState({ title: '', body: '' })
  const [fetchingPostById, isLoading, error] = useFetch(async (id) => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [clone, setClone] = useState({})
  function acceptEdit() {}

  const [fetchingComment, loading, er] = useFetch(async (id) => {
    const response = await PostService.getComment(params.id)
    setComments(response.data)
  })

  function startEdit(call1, call2) {
    call1(true)
    call2(post)
  }

  function acceptEdit(call1, call2) {
    call1(false)
    call2(clone)
  }

  function cancelEdit(call1) {
    call1(false)
  }

  useEffect(() => {
    fetchingPostById(params.id)
    fetchingComment(params.id)
  }, [])
  return (
    <div>
      {' '}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post">
          <div className="post__content">
            <PostId
              setIsEditTile={setIsEditTile}
              isEditTile={isEditTile}
              setClone={setClone}
              clone={clone}
              post={post}
              startEdit={startEdit}
              cancelEdit={cancelEdit}
              acceptEdit={acceptEdit}
              setPost={setPost}
              setIsEditBody={setIsEditBody}
              isEditBody={isEditBody}
            />
            <hr className="hr__post" />
            <div>
              <CreateButton onClick={() => setVisible((prop) => !prop)}>Comments</CreateButton>
              {visible ? <Comment comments={comments} /> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
