import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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


