import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import NewBlog from './Pages/CreateNewBlog/NewBlog';
import Navbar from './Components/Navbar';
import Layout from './Layouts/Layout';
import Blog from './Pages/Blog/Blog';
import BlogEdit from './Pages/BlogEdit/BlogEdit';

function App() {

  const location = useLocation();

  return (
    <>




      <Routes>

        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
        </Route>



        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Layout><MainPage /></Layout>} />
          <Route path='/new-blog' element={<Layout><NewBlog /></Layout>} />
          <Route path='/blog/:id' element={<Layout><Blog /></Layout>} />
          <Route path='/blog/edit/:id' element={<Layout><BlogEdit /></Layout>} />



        </Route>
        <Route path='*' element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  )
}

export default App
