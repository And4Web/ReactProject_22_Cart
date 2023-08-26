import React, { useState, useReducer, useEffect, useContext } from 'react';
import cartItems from './data';

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();


export const AppContextProvider = ({children}) => {
  const [cart, setCart] = useState(cartItems);

  return <AppContext.Provider value={{
    cart,
  }}>{children}</AppContext.Provider>
}

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}