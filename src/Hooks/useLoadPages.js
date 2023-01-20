import { useEffect } from 'react'
export default function useLoadPages(scrollLoad, pageLoad, page, pageScroll, limit, createButton) {
  useEffect(() => {
    createButton()
    scrollLoad(limit, pageScroll) //eslint-disable-next-line
  }, [pageScroll])

  useEffect(() => {
    pageLoad(limit, page) //eslint-disable-next-line
  }, [page])
}
