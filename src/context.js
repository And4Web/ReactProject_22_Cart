import React, { useState, useReducer, useEffect, useContext } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}


export const AppContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}