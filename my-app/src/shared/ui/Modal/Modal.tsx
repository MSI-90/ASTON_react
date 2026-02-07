import './Modal.css';
import {ModalHeader} from './Modal.Header.tsx';
import {ModalBody} from './Modal.Body.tsx';
import {ModalFooter} from "./Modal.Footer.tsx";

interface IModalProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

function ModalBase (props: IModalProps){
  return (
    <>
      <div className="modal-overlay" onClick={props?.onClick}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </>
  )
}

type ModalComponent = typeof ModalBase & {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

const Modal = ModalBase as ModalComponent

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal