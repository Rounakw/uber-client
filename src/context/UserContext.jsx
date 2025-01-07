import React from 'react'

export const UserDataContext = React.createContext()

function UserContext({ children }) {

  const [user, setUser] = React.useState({
    fullname: {
      firstname: '',
      lastname: '',
    },
    email: 'exampl@gmail.com',
  })

  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
