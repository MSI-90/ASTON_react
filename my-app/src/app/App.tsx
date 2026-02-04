import MainLayout from '../shared/layouts/MainLayout.tsx';
import PostList from '../widgets/PostList/PostList.tsx';
import '../app/App.css';
import {ThemeContext, type Theme} from "../shared/lib/theme/context.ts";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

  return (
    <>
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            <MainLayout>
                <PostList />
            </MainLayout>
        </ThemeContext.Provider>
    </>
  )
}

export default App
