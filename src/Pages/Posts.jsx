import { useRef, useState } from 'react'
import PostService from '../API Service/PostService'
import { useEdit } from '../Hooks/useEdit'
import { useFetch } from '../Hooks/useFetch'
import { usePosts } from '../Hooks/usePosts'
import CreateButton from '../Components/UI/buttons/CreateButton'
import MyInput from '../Components/UI/inputs/MyInput'
import Loader from '../Components/UI/loader/Loader'
import Pagination from '../Components/UI/pagination/Pagination'
import MySelect from '../Components/UI/select/MySelect'
import { getPagesCount } from '../utils/pages'
import Postlist from '../Components/Postlist'
import { useObserver } from '../Hooks/useObserver'
import useLoadPages from '../Hooks/useLoadPages'
import EditButtons from '../Components/EditButtons'

function Posts() {
  const [posts, setPosts] = useState([])
  const [isEndless, setIsEndless] = useState(false)
  const [visible, setVisible] = useState(false)
  const [halfPage, setHalfPage] = useState(false)
  const [selectedSort, setSeceltedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [totalPages, setTotalPages] = useState(0) //eslint-disable-next-line
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageScroll, setPageScroll] = useState(1)
  const [removeAll, deletePost, createPost, buttonOnTop] = useEdit(setPosts, posts, setVisible, setHalfPage)
  const sortedAndSearchPosts = usePosts(selectedSort, posts, searchQuery)

  const lastElement = useRef()

  const [fetchPosts, isLoading, error] = useFetch(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  const [fetchPostsScroll, loading, er] = useFetch(async () => {
    const response = await PostService.getAll(limit, pageScroll)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useObserver(
    lastElement,
    pageScroll < totalPages && isEndless,
    loading,
    () => {
      setPageScroll(pageScroll + 1)
    },
    isEndless
  )
  useLoadPages(fetchPostsScroll, fetchPosts, page, pageScroll, limit, buttonOnTop)

  function changePage(page) {
    setPage(page)
  }

  return (
    <div className="App">
      <EditButtons setVisible={setVisible} removeAll={removeAll} createPost={createPost} visible={visible} />
      <hr className="hr__post" />
      <MyInput onChange={(e) => setSearchQuery(e.target.value)} placeholder="Поиск..." value={searchQuery} />
      <MySelect
        setPageScroll={setPageScroll}
        page={page}
        cancelScroll={fetchPosts}
        limit={limit}
        isEndless={isEndless}
        setIsEndless={setIsEndless}
        value={selectedSort}
        onChange={setSeceltedSort}
        defValue="Сортировать"
        options={[
          { value: 'title', name: 'По названиям' },
          { value: 'body', name: 'По содержанию' },
          { value: 'id', name: 'По дате создания' },
        ]}
      />
      <Postlist remove={deletePost} posts={sortedAndSearchPosts} />
      {isLoading && <Loader />}
      {error && <h1>Ошибка {error}</h1>}
      {er && <h1>{er}</h1>}
      {halfPage ? (
        <CreateButton
          onClick={() => window.scrollTo(0, 0)}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          To the top
        </CreateButton>
      ) : null}
      <div ref={lastElement}></div>
      {!isEndless && <Pagination page={page} changePage={changePage} totalPages={totalPages} />}
    </div>
  )
}

export default Posts
