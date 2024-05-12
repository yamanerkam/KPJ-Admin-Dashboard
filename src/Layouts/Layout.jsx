import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import LayoutContextProvider from '../Contexts/LayoutContext';


const Layout = ({ children }) => {
    const { toggle } = useContext(LayoutContextProvider)
    return (
        <div className="app-container">
            {location.pathname !== '/login' && <Navbar />}
            <main className={`main-content ${toggle ? 'main-closed' : ''}`}>{children}</main>
        </div>
    );
};

export default Layout;