import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // write authentication logic
    // Make login api call, check if token valid
    const isAuthenticated = false;
  return (
    <div>{isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />}</div>
  )
}

export default ProtectedRoute