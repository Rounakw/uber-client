import React from 'react';

// Create the context
export const UserDataContext = React.createContext();

function UserContext({ children }) {
  const [user, setUser] = React.useState({
    fullname: {
      firstname: '',
      lastname: '',
    },
    email: 'example@gmail.com',
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
