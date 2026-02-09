import {useState, type PropsWithChildren} from "react";
import {type Theme, ThemeContext} from "./ThemeContext.ts";

export default function ThemeProvider({children}: PropsWithChildren) {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}