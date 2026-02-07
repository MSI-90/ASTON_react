import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../../../shared/layouts/MainLayout.tsx';
import PostList from '../../../widgets/PostList/PostList.tsx';
import CommentList from "../../../widgets/CommentList/ui/CommenList.tsx";
import WithLoading from '../../../shared/lib/hoc/withLoading.tsx';

const PostListWithLoader = WithLoading(PostList);
const CommentListWithLoading = WithLoading(CommentList);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: (
        <>
          <PostListWithLoader />
          <CommentListWithLoading />
        </>
      )},
      {path: 'posts', element: <PostListWithLoader />}
    ]
  }
]);