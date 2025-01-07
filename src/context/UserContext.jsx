import React from 'react'

export const userDataContext = React.createContext()

function userContext({ children }) {

  const [user, setUser] = React.useState({
    fullname: {
      firstname: '',
      lastname: '',
    },
    email: 'exampl@gmail.com',
  })

  return (
    <div>
      <userDataContext.Provider value={{ user, setUser }}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default userContext
