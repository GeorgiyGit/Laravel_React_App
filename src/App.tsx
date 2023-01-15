import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './features/home/components/HomePage';
import RegisterPage from './features/account/components/register/RegisterPage';
import Layout from './components';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="login" element={<HomePage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
