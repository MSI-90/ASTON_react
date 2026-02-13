import {NavLink} from "react-router-dom";
import './UserTabs.css';
import {useState} from "react";
import Button from "../../shared/ui/Buttons/Button.tsx";

interface IPostParams {
  id: number;
  section?: string;
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
  const [open, setOpen] = useState(false);

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

  const customPost: IPostParams = {
    id: 1
  }

  return(
    <>
        <nav className="dropdown">
          <Button
            baseButton={true}
            className={'dropdown__button'}
            onClick={() => setOpen(prev => !prev)}
          >
            Меню
          </Button>

          {open && (
            <div className="dropdown__menu">
              <NavLink to="/posts">
                Все посты
              </NavLink>
              <NavLink to={`users/${postParams.id}/${postParams.section}`}>
                Посты пользователя ID: 1
              </NavLink>
              <NavLink to={`users/${albumParams.id}/${albumParams.section}`}>
                Альбомы пользователя ID: 1
              </NavLink>
              <NavLink to={`users/${todosParams.id}/${todosParams.section}`}>
                Таски пользователя ID: 1
              </NavLink>
              <NavLink to={`customHook/${customPost.id}`}>
                Кастомный хук (ID: 1)
              </NavLink>
            </div>
          )}
        </nav>
    </>
  )
}