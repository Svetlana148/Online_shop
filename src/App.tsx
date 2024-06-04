import React from 'react';
import s from './App.module.css';
// import './App.module.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './AppLayout';
import store from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import Home from './screens/Home/Home';
import Shop from './screens/Shop/Shop';



function App() {

  return (
    <div className="App">
      {/* Provider кладет store в глобальный CONTEXT, чтобы все  */}
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </div>
  );
}

export default App;
