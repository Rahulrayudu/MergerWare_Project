import React from 'react';
import { Hello } from './Hello.jsx';
import { LoginPage } from './LoginPage.jsx';
import { SignupPage } from './SignupPage.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <LoginPage/>
    <SignupPage/>
  </div>
);
