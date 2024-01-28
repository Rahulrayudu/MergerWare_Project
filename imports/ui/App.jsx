import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { LoginPage } from './LoginPage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <LoginPage/>
  </div>
);
