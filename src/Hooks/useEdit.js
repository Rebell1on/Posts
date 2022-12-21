export function useEdit(callback, posts, visible, setHalfPage) {
  function removeAll() {
    callback([])
  }
  function deletePost(post) {
    callback(posts.filter((item) => item.id !== post.id))
  }

  function createPost(post) {
    callback([...posts, post])
    visible(false)
  }

  function createOnTop() {
    if (window.pageYOffset > 600) {
      setHalfPage(true)
    } else {
      setHalfPage(false)
    }
  }

  function scrollToTop() {
    window.addEventListener('scroll', createOnTop)
  }

  return [removeAll, deletePost, createPost, scrollToTop]
}
