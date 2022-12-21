import React from 'react'
import { usePagination } from '../../../Hooks/usePagination'

export default function Pagination({ changePage, totalPages, page }) {
  const pagesArray = usePagination(totalPages)
  return (
    <div className="pages__wrapper">
      {pagesArray.map((p) => (
        <span onClick={() => changePage(p)} key={p} className={p === page ? 'pages current' : 'pages'}>
          {p}
        </span>
      ))}
    </div>
  )
}
