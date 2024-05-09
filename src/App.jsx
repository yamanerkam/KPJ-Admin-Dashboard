import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoutes from './PrivateRoutes';

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route exact path='/login' element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<MainPage />} />
          <Route path='/dashboard-1' element={<MainPage />} />
          <Route path='/dashboardd' element={<MainPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
