import React from 'react';
import { useGlobalContext } from './context';

function App() {
  const data = useGlobalContext();
  console.log({data})
  return (
    <div >
      <h1>Cart</h1>
    </div>
  );
}

export default App;
