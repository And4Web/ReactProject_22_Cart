import React, { useContext } from 'react';


const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
  return <AppContext.Provider value="Hello">{children}</AppContext.Provider>
}

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}