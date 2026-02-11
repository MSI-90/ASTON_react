import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../../../shared/layouts/MainLayout.tsx';
import PostList from '../../../widgets/PostList/PostList.tsx';
import {CommentList} from "../../../widgets/CommentList/ui/CommenList.tsx";
import WithLoading from '../../../shared/lib/hoc/withLoading.tsx';
import PostPage from '../../../pages/Post/PostPage.tsx';
import Error404 from "../../../pages/Error404/Error404.tsx";
import AlbumPage from "../../../pages/Album/AlbumPage.tsx";
import {getPostById} from "../../api/Loaders.ts";

const PostListWithLoader = WithLoading(PostList);
const CommentListWithLoader = WithLoading(CommentList);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: (
        <>
          <PostListWithLoader />
          <CommentListWithLoader />
        </>
      )},
      { path: 'posts', element: <PostListWithLoader /> },
      { path: 'posts/:id', loader: getPostById, element: <PostPage />, errorElement: <Error404 /> },
      { path: '/users/:id/albums', element: <AlbumPage />, errorElement: <Error404 />}
    ]
  }
]);