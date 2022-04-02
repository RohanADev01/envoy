import { Navigate, Outlet } from 'react-router-dom'
import { useAuthDataContext } from '../Landing/userAuth'

export const ProtectedRoute = () => {
  const auth = useAuthDataContext()
  return auth.user !== '' ? <Outlet /> : <Navigate to='/' />
}
