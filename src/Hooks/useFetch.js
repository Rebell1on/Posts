import { useState } from 'react'

export function useFetch(callback) {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      setLoading(true)
      await callback()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return [fetching, isLoading, error]
}
