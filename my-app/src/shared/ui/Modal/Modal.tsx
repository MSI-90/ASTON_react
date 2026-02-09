import Button from '../Buttons/Button';
import './Modal.css';

interface IModalProps {
    title: string;
    body: string;
    onClick: () => void;
}

export default function Modal ({ title, body, onClick }:IModalProps) {

    return (
        <>
            <div className="modal-overlay" onClick={onClick}>
                <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <button className="modal-close" onClick={onClick}>×</button>
                    </div>

                    <div className="modal-body">
                        {body}
                    </div>

                    <div className="modal-footer">
                        <Button baseButton={true} onClick={onClick}>
                            Закрыть
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}