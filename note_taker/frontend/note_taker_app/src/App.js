import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import Home from './home';
import Addnote from './addnote';
function App() {

  return (

    <div className="App">
      
<BrowserRouter>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/addnote" element={<Addnote />} />

<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />



</Routes>

</BrowserRouter>
 

    </div>
   
  );
}

export default App;
