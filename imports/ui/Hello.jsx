import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
      /><br/>
      <input 
        type="password" 
        placeholder="Password" 
      /><br/>
      <button>Login</button>
    </div>
  );
};
