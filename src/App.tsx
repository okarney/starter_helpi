//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routerer from './Routerer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routerer />
      </BrowserRouter>
    </div>
  );

}

export default App;
