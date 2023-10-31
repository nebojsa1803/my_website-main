import { Navigate } from 'react-router-dom'
import { getDataFromLocalStorage } from '../utils'

// only logged user have access to favorites page
const ProtectedRoute = ({ children }) => {
  const isLogged = getDataFromLocalStorage('logged')

  if (!isLogged) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedRoute
