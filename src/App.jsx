import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import { Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<MainPage />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
