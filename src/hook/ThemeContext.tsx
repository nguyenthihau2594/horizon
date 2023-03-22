import { ReactNode } from "react";
import { useState, createContext } from "react";
const ThemeContext = createContext({});

interface ThemeProviderProps{
	children?: ReactNode;
}

function ThemeProvider({children} : ThemeProviderProps){
    const [theme,setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        
    }
const value= {theme,toggleTheme}

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>

    )
}

export {ThemeContext, ThemeProvider}