import {useParams} from "react-router-dom";
import AlbumPage from "../Album/AlbumPage.tsx";
import TodosPage from '../Todos/TodosPage.tsx';
import PostPage from "../Post/PostPage.tsx";
import Error404 from "../Error404/Error404.tsx";

export default function UserPage() {
  const {section} = useParams();

  switch (section) {
    case 'albums':
      return (
        <>
          <AlbumPage />
        </>
      )
    case 'todos':
      return (
        <>
          <TodosPage />
        </>
      )
    case 'posts':
      return (
        <>
          <PostPage />
        </>
      )
    default:
      return (
        <>
          <Error404 />
        </>
      )
  }
}