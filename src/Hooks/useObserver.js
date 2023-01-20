import { useEffect, useRef } from 'react'

export const useObserver = (ref, canLoad, isLoading, callback, ...trigers) => {
  const observer = useRef()
  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    var cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    observer.current.observe(ref.current) //eslint-disable-next-line
  }, [isLoading, ...trigers])
}
