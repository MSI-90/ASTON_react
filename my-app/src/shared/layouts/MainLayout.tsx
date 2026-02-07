import Header from '../../widgets/LayoutHeader/Header.tsx'
import Footer from '../../widgets/LayoutFooter/Footer.tsx'
import {useContext} from "react";
import {ThemeContext} from "../lib/theme/context.ts";
import './MainLayout.css';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={theme?.theme}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
