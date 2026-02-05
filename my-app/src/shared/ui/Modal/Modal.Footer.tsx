import Button from "../Buttons/Button.tsx";

interface IModalFooterProps {
  onClick?: () => void;
}

export function ModalFooter (props: IModalFooterProps) {
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