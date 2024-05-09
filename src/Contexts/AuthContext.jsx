import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const changeAuth = (isAuthenticated) => {
        setIsAuthenticated(!isAuthenticated)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, changeAuth }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;