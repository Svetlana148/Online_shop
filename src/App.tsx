import React from 'react';
// import s from './App.module.css';
import './App.module.css';
// import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import { Router, Routes } from 'react-router-dom';
// import Preloader from './components/common/Preloader/Preloader';
// import Home from './screens/Home/Home';
// import Shop from './screens/Shop/Shop';



function App() {
  return (
    <div>

        <AppLayout />

    </div>
  );
}

export default App;
