import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
const token = localStorage.getItem('token')
console.log(token);
if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
axios.defaults.baseURL = "https://stockstore12.onrender.com/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

