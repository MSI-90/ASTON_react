interface IModalBodyProps {
  body?: string;
}

export function ModalBody (props: IModalBodyProps) {
  return (
    <>
      <div className="modal-body">
        {props?.body}
      </div>
    </>
  )
}