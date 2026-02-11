import {NavLink} from "react-router-dom";
import './UserTabs.css';

interface IPostParams {
  id: number;
  section: string;
}

interface IAlbumParams {
  id: number;
  section: string;
}

interface ITodos {
  id: number;
  section: string;
}

export default function UserTabs() {
  const postParams: IPostParams = {
    id: 1,
    section: 'posts'
  }

  const albumParams: IAlbumParams = {
    id: 1,
    section: 'albums'
  }

  const todosParams: ITodos = {
    id: 1,
    section: 'todos'
  }

  return(
    <>
      <nav>
        <span>
          <NavLink to="/posts">Все посты</NavLink>
        </span>
        <span>
          <NavLink to={`users/${postParams.id}/${postParams.section}`}>Все посты пользователя под ID: 1</NavLink>
        </span>
        <span>
          <NavLink to={`users/${albumParams.id}/${albumParams.section}`}>Все альбомы пользователя под ID: 1</NavLink>
        </span>
        <span>
          <NavLink to={`users/${todosParams.id}/${todosParams.section}`}>Все таски пользователя под ID: 1</NavLink>
        </span>
      </nav>
    </>
  )
}