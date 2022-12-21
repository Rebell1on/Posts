import { useMemo } from 'react'

export function usePagination(pages) {
  const array = useMemo(() => {
    const result = []
    for (let i = 0; i < pages; i++) {
      result.push(i + 1)
    }
    return result
  }, [pages])
  return array
}
