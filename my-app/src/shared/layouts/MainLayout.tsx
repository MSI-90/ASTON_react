import Header from '../../widgets/LayoutHeader/Header.tsx'
import Footer from '../../widgets/LayoutFooter/Footer.tsx'
import {type PropsWithChildren, useContext} from "react";
import {ThemeContext} from "../lib/theme/context.ts";
import './MainLayout.css';

export default function MainLayout({children}: PropsWithChildren) {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={theme?.theme}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}
