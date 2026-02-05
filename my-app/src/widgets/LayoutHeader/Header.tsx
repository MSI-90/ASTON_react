import Button from '../../shared/ui/Buttons/Button.tsx';
import './Header.css';
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/switcher.tsx";
import Modal from '../../shared/ui/Modal/Modal.tsx';
import {createPortal} from 'react-dom';
import {useState} from "react";

interface IAboutModalInfo {
  title: string;
  body: string;
}

export default function Header(){
  const [showModal, setShowModal] = useState(false);

  const aboutModalInfo: IAboutModalInfo = {
    title: 'О приложении',
    body: 'Тело модального окна',
  }

  return (
    <>
      <header className="header-container">
        <h2 className="header-title">Header страницы</h2>
        <ThemeSwitcher />
        <Button
          baseButton={true}
          onClick={() => setShowModal(true)}
        >
          О проекте
        </Button>

        {showModal && createPortal(
          <Modal onClick={()=> setShowModal(false)}>
            <Modal.Header title={aboutModalInfo.title} onClick={()=>setShowModal(false)} />
            <Modal.Body body={aboutModalInfo.body} />
            <Modal.Footer onClick={()=>setShowModal(false)}/>
          </Modal>,
          document.body)
        }
      </header>
    </>
  )
}