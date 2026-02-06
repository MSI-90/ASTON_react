import MainLayout from '../shared/layouts/MainLayout.tsx';
import PostList from '../widgets/PostList/PostList.tsx';
import '../app/App.css';
import {ThemeContext, type Theme} from "../shared/lib/theme/context.ts";
import {useState} from "react";
import WithLoading from "../shared/lib/hoc/withLoading.tsx";

function App() {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    const PostListWithLoader = WithLoading(PostList);

  return (
    <>
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            <MainLayout>
              <PostListWithLoader/>
            </MainLayout>
        </ThemeContext.Provider>
    </>
  )
}

export default App
