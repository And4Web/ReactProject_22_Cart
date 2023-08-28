import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

import { useGlobalContext } from './context';

function App() {
  const {isLoading, cart} = useGlobalContext();  
  console.log({cart, isLoading})
  if(isLoading){
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main >
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;

// see refactoring of code: 7:36 and revisit the implementation of the total and amount update feature.
