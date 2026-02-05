import Button from '../Buttons/Button';
import './Modal.css';

interface IModalProps {
  title?: string;
  body?: string;
  onClick?: () => void;
  children?: React.ReactNode[];
}

export default function Modal (props: IModalProps) {
  return (
    <>
      <div className="modal-overlay" onClick={props?.onClick}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          {props?.children}
        </div>
      </div>
    </>
  )
}

Modal.Header = function ModalHeader (props: IModalProps) {
  return (
    <>
      <div className="modal-header">
        <h3>{props?.title}</h3>
        <button className="modal-close" onClick={props?.onClick}>×</button>
      </div>
    </>
  )
}

Modal.Body = function ModalBody (props: IModalProps) {
  return (
    <>
      <div className="modal-body">
        {props?.body}
      </div>
    </>
  )
}

Modal.Footer = function ModalFooter (props: IModalProps) {
  return (
    <>
      <div className="modal-footer">
        <Button baseButton={true} onClick={props?.onClick}>
          Закрыть
        </Button>
      </div>
    </>
  )
}