import {useParams} from "react-router-dom";
import AlbumPage from "../Album/AlbumPage.tsx";
import TodosPage from '../Todos/TodosPage.tsx';
import Error404 from "../Error404/Error404.tsx";
import UserPostPage from "../Post/UserPosts/UserPostPage.tsx";

export default function UserVariantSectionPage() {
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
          <UserPostPage />
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