import MainLayout from '../shared/layouts/MainLayout.tsx';
import PostList from '../widgets/PostList/PostList.tsx';
import '../app/App.css';

function App() {

  return (
    <>
        <MainLayout>
            <PostList />
        </MainLayout>
    </>
  )
}

export default App
