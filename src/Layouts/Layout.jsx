import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            {location.pathname !== '/login' && <Navbar />}
            <main className="main-content">{children}</main>
        </div>
    );
};

export default Layout;