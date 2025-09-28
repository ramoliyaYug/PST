import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const err = useRouteError()
  return (
    <div>{err.message}</div>
  )
}

export default ErrorPage