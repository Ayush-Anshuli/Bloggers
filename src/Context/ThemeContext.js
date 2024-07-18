"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode,setmode] = useState("dark");

    const toogle = () => {
        setmode((prev) => (prev ==="dark" ?"light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{toogle,mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
    
}