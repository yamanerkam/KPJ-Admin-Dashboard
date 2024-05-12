import { createContext, useState } from "react";


const LayoutContext = createContext()

export const LayoutContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log('toggle:' + ' ' + toggle)
    }

    return (
        <LayoutContext.Provider value={{ toggle, handleToggle }}>
            {children}
        </LayoutContext.Provider >
    )

}

export default LayoutContext