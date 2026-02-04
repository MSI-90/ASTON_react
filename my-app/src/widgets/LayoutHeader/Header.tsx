import Button from '../../shared/components/Button';
import AboutModal from "../../features/about-project/ui/AboutModal";
import {useState} from 'react'
import './Header.css';

interface IDialogInfo {
    dialogTitle: string;
    dialogBody: string;
}

export default function Header(){
    const [dialog, setDialog] = useState(false);
    const dialogInfo: IDialogInfo = {
        dialogTitle: 'О проекте',
        dialogBody: 'Демонстрация диалога'
    }

    return (
        <>
            <header className="header-container">
                <h2 className="header-title">Header страницы</h2>
                <Button
                    baseButton={true}
                    onClick={() =>
                        setDialog(true)
                    }
                >
                    О проекте
                </Button>

                {dialog && (
                    <AboutModal
                        header={dialogInfo.dialogTitle}
                        modal={true}
                        onAction={(type) => {
                            if(type === 'dismiss') setDialog(false)
                        }}
                    >
                        {dialogInfo.dialogBody}
                    </AboutModal>
                )}
            </header>
        </>
    )
}