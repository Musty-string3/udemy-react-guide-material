import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={ [theme, setTheme] }>
            { children }
        </ThemeContext.Provider>
    )
}

export const userTheme = () => useContext(ThemeContext);

export default ThemeProvider;