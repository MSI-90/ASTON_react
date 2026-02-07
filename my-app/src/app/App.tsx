import {ThemeContext, type Theme} from "../shared/lib/theme/context.ts";
import {useState} from "react";
import '../app/App.css';

import {RouterProvider} from "react-router-dom";
import { router } from './providers/router/router.tsx';


function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
