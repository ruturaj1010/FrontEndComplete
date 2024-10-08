import React, { createContext, useState } from 'react'

export const userContext = createContext();

const UserContextProvider = ({children}) => {

  const [ val , setVal ] = useState(0)

  return (
    <userContext.Provider value={[val , setVal]}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider;