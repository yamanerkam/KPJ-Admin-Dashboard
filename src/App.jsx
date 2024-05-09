import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import NewBlog from './Pages/CreateNewBlog/NewBlog';

function App() {


  return (
    <>

      <Routes>

        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
        </Route>




        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<MainPage />} />
          <Route path='/new-blog' element={<NewBlog />} />
          <Route path='/dashboardd' element={<MainPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
