import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GeustLayout() {

  const {token} = useStateContext()

  if (token) {
    return <Navigate to="/users"/>
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
}
