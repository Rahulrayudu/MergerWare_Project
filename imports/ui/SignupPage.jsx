import React, { useState } from 'react';
import { userCollections } from '../api/userCollections';

export const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    userCollections.insert({username,email,password,role})
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Role:', role);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /><br/>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="borrower">Borrower</option>
          <option value="lender">Lender</option>
        </select>
      </label><br/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};
