import React, { useState, useEffect, useContext, createContext } from 'react'

export const AuthDataContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export const useAuthDataContext = () => useContext(AuthDataContext)

const AuthDataProvider = (props) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setUser(localStorage.getItem('user'))
    setEmail(localStorage.getItem('email'))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('user', user)
  }, [user])

  useEffect(() => {
    window.localStorage.setItem('email', email)
  }, [email])

  return (
    <AuthDataContext.Provider
      value={{
        user: user,
        email: email,
        login: (user, email) => {
          setUser(user)
          setEmail(email)
          localStorage.setItem('user', user)
          localStorage.setItem('email', email)
        },
        logout: () => {
          setUser('')
          setEmail('')
          localStorage.setItem('user', '')
          localStorage.setItem('email', '')
        },
      }}
      {...props}
    />
  )
}

export default AuthDataProvider
