import React, { useState, useReducer, useEffect, useContext } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  // cart: cartItems,
  cart:[],
  total: 0,
  amount: 0
}


export const AppContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"});
  }
  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id})
  } 
  const increaseAmount = (id) => {
    dispatch({type: "INCREASE_AMOUNT", payload: id})
  }
  const decreaseAmount = (id) => {
    dispatch({type: "DECREASE_AMOUNT", payload: id})
  }
  
  const fetchData = async () => {
    dispatch({type: "LOADING"});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload: cart});
    console.log(cart);
  }

  useEffect(()=>{
    fetchData();
  }, [])

  useEffect(()=>{
    dispatch({type: "GET_TOTALS"})
  },[state.cart])



  return <AppContext.Provider value={{...state, clearCart, removeItem, increaseAmount, decreaseAmount}}>{children}</AppContext.Provider>
}

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}