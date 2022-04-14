import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Landing/Pages/Home'
import SignUp from './Components/Landing/Pages/Signup'
import Login from './Components/Landing/Pages/Login'
import AuthDataProvider from './Components/Landing/UserAuth'
import { ProtectedRoute } from './Components/Dashboard/ProtectedRoutes'
import DashboardContents from './Components/Dashboard/Pages/Dashboard'
import { Outlet } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='dashboard' element={<DashboardContents />}>
              <Route path='create' element={<Outlet />} />
              <Route path='invoices' element={<Outlet />} />
              <Route path='profile' element={<Outlet />} />
              <Route path='team' element={<Outlet />} />
            </Route>
          </Route>
          <Route path='*' element={<h1>Error 404. Page not found!</h1>} />
        </Routes>
      </AuthDataProvider>
    </BrowserRouter>
  )
}

export default App
