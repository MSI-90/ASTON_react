import Button from '../../../shared/components/Button';
import {useEffect, type ReactNode} from 'react'
import './AboutModal.css';

export type ActionType = 'dismiss' | 'cancel';

interface IAboutModalProps {
    header: string;
    modal: boolean;
    extendedDismiss?: boolean;
    onAction?: (type: ActionType) => void;
    hasCancel?: boolean;
    children?: ReactNode;
}

export default function AboutModal(props: IAboutModalProps) {
    const {
        header,
        modal = false,
        extendedDismiss = true,
        hasCancel = true,
        onAction,
    } = props;


    useEffect(() => {
        function dismissClick(e: MouseEvent) {
            const target = e.target
            if (target instanceof HTMLElement && target.classList.contains('DialogModal')) {
                onAction?.('dismiss')
            }
        }

        function dismissKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onAction?.('dismiss');
            }
        }

        if (modal) {
            document.body.classList.add('DialogModalOpen');
            if (extendedDismiss) {
                document.body.addEventListener('click', dismissClick);
                document.addEventListener('keydown', dismissKey);
            }
        }
        return () => {
            document.body.classList.remove('DialogModalOpen');
            document.body.removeEventListener('click', dismissClick);
            document.removeEventListener('keydown', dismissKey);
        };
    }, [onAction, modal, extendedDismiss]);

    return (
        <div className={modal ? 'Dialog DialogModal' : 'Dialog'}>
            <div className={modal ? 'DialogModalWrap' : undefined}>
                <div className="DialogHeader">{header}</div>
                <div className="DialogBody">
                    { Array.isArray(props.children) ? (
                        props.children.map((item, index) => (
                            <p className="DialogBodyContent" key={index}>
                                <span>{index + 1})</span>
                                {item}
                            </p>
                        ))) : (
                            <p className="DialogBodyContent">
                                <span>{props.children})</span>
                            </p>
                        )
                    }
                </div>
                <div className="DialogFooter">
                    {hasCancel &&
                      <Button
                        baseButton={true}
                        className="DialogDismiss"
                        onClick={() => onAction?.('dismiss')}
                      >
                        Закрыть
                      </Button>}
                </div>
            </div>
        </div>
    );
}