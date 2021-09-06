import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Details from './components/Details';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
