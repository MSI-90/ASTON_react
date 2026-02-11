import {NavLink} from "react-router-dom";
import './UserTabs.css';

interface IPostParams {
  id: number;
  section: string;
}

export default function UserTabs() {
  const postParams: IPostParams = {
    id: 1,
    section: 'posts'
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
      </nav>
    </>
  )
}