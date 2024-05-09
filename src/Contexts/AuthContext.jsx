import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('isAuthenticated') === 'true' || false // Initial value from localStorage
    );

    const changeAuth = () => {
        setIsAuthenticated(!isAuthenticated);
        localStorage.setItem('isAuthenticated', !isAuthenticated); // Store in localStorage
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, changeAuth }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;