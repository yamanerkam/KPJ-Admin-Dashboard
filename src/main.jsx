import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './Contexts/AuthContext';
import { LayoutContextProvider } from './Contexts/LayoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LayoutContextProvider>
          <App />
        </LayoutContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
