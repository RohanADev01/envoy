import { Navigate, Outlet } from 'react-router-dom'
import { useAuthDataContext } from '../Landing/UserAuth'

export const ProtectedRoute = () => {
  const auth = useAuthDataContext()
  const token = localStorage.getItem('user')
  return token ? <Outlet /> : <Navigate to='/' />
}
