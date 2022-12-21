import { useEffect } from 'react'
export default function useLoadPages(scrollLoad, pageLoad, page, pageScroll, limit, createButton) {
  useEffect(() => {
    createButton()
    scrollLoad(limit, pageScroll)
  }, [pageScroll])

  useEffect(() => {
    pageLoad(limit, page)
  }, [page])
}
