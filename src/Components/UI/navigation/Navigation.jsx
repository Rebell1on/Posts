import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { privatRoutes, publicRoutes } from '../../../router/routes'
import Loader from '../loader/Loader'

export default function Navigation() {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      {privatRoutes.map((item) => {
        return <Route key={item.path} element={<item.component />} path={item.path} />
      })}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((item) => {
        return <Route key={item.path} element={<item.component />} path={item.path} />
      })}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
