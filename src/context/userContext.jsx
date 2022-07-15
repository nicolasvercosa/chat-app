import React from 'react'


export const AuthContext = React.createContext()

export const useAuthContext = () => React.useContext(AuthContext)

export default function AuthProvider({ children }) {
  const initialUser = {
    name: 'dummy',
    token: '123'
  }
  const [user, setUser] = React.useState(initialUser)
  
  const signIn = () => {
     
    setUser(initialUser)
  }

  const signOut = () => {
    setUser(null)
  }


  return (
    <AuthContext.Provider value={{signIn, signOut, user, initialUser}}>
      {children}
    </AuthContext.Provider>
  )
}