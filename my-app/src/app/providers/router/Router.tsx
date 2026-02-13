import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../../../shared/layouts/MainLayout.tsx';
import PostPage from '../../../pages/Post/PostPage.tsx';
import Error404 from "../../../pages/Error404/Error404.tsx";
import {PhotoPage} from "../../../pages/Photo/PhotoPage.tsx";
import UserPage from '../../../pages/User/UserPage.tsx';
import CustomPage from "../../../pages/CustomPage/CustomPage.tsx";
import PostListPage from "../../../pages/Post/PostPageWithoutUser/PostListPage.tsx";
import {CommentPage} from "../../../pages/Comment/CommenPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: (
        <>
          <PostListPage />
          <CommentPage />
        </>
      )},
      { path: 'posts', element: <PostListPage />, errorElement: <Error404 /> },
      { path: 'comments', element: <CommentPage />, errorElement: <Error404 /> },
      { path: 'posts/:id', element: <PostPage />, errorElement: <Error404 /> },
      { path: 'users/:id/:section', element: <UserPage />, errorElement: <Error404 /> },
      { path: 'albums/:id/photos', element: <PhotoPage />, errorElement: <Error404/> },
      { path: 'customHook/:id', element: <CustomPage />, errorElement: <Error404/>}
    ]
  }
]);