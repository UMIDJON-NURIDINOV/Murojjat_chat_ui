import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
