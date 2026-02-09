import Header from '../../widgets/LayoutHeader/Header.tsx'
import Footer from '../../widgets/LayoutFooter/Footer.tsx'
import {type PropsWithChildren} from "react";
import './MainLayout.css';
import ThemeProvider from "../lib/theme/ThemeProvider.tsx";

export default function MainLayout({children}: PropsWithChildren) {
    return (
        <>
            <ThemeProvider>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    )
}
