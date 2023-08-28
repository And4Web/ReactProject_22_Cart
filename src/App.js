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
