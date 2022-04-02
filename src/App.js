import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Landing/Pages/Home'
import DashboardContents from './Components/Dashboard/Dashboard'
import SignUp from './Components/Landing/Pages/Signup'
import Login from './Components/Landing/Pages/Login'
import AuthDataProvider from './Components/Landing/UserAuth'
import { ProtectedRoute } from './Components/Dashboard/ProtectedRoutes'
import { CreateInvoice } from './Components/Dashboard/Pages/CreateInvoice'
import { Activity } from './Components/Dashboard/Pages/Activity'
import { MyInvoices } from './Components/Dashboard/Pages/MyInvoices'

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardContents />}>
              <Route path='/dashboard/' element={<Activity />} />
              <Route path='/dashboard/create' element={<CreateInvoice />} />
              <Route path='/dashboard/invoices' element={<MyInvoices />} />
            </Route>
          </Route>
          <Route path='*' element={<h1>Error 404. Page not found!</h1>} />
        </Routes>
      </AuthDataProvider>
    </BrowserRouter>
  )
}

export default App
