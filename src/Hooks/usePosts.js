import { useMemo } from 'react'

export function usePosts(selectedSort, posts, searchQuery) {
  const sortedPosts = useMemo(() => {
    if (selectedSort === 'id') {
      return [...posts].sort((a, b) => a[selectedSort] - b[selectedSort])
    } else if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(
      (item) => item.title.toLowerCase().includes(searchQuery) || item.body.toLowerCase().includes(searchQuery)
    )
  }, [searchQuery, sortedPosts])

  return sortedAndSearchPosts
}
