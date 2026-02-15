import {NavLink} from "react-router-dom";
import './UserTabs.css';
import {useState} from "react";
import Button from "../../shared/ui/Buttons/Button.tsx";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";

interface IPostParams {
  section?: string;
}

interface IAlbumParams {
  section: string;
}

interface ITodos {
  section: string;
}

export default function UserTabs() {
  const [open, setOpen] = useState(false);

  const postParams: IPostParams = {
    section: 'posts'
  }

  const albumParams: IAlbumParams = {
    section: 'albums'
  }

  const todosParams: ITodos = {
    section: 'todos'
  }

  const userData = useAppSelector(state => state.user.currentUserId);

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
              <NavLink to={'/'}>
                Главная
              </NavLink>
              <NavLink to={'/posts'}>
                Все посты
              </NavLink>
              <NavLink to={`users/${userData}/${postParams.section}`}>
                Посты пользователя ID: {userData}
              </NavLink>
              <NavLink to={`users/${userData}/${albumParams.section}`}>
                Альбомы пользователя ID: {userData}
              </NavLink>
              <NavLink to={`users/${userData}/${todosParams.section}`}>
                Таски пользователя ID: {userData}
              </NavLink>
              <NavLink to={`customHook/${userData}`}>
                Кастомный хук (ID: {userData})
              </NavLink>
            </div>
          )}
        </nav>
    </>
  )
}