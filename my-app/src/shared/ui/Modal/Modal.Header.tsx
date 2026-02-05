interface IModalHeaderProps {
  title?: string;
  onClick?: () => void;
}

export function ModalHeader (props: IModalHeaderProps) {
  return (
    <>
      <div className="modal-header">
        <h3>{props?.title}</h3>
        <button className="modal-close" onClick={props?.onClick}>×</button>
      </div>
    </>
  )
}