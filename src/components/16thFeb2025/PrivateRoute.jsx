import React from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

  const { isAuthenticated } = useAuthentication();
  
  return isAuthenticated ? children : <Navigate to="/login" />
  
}
