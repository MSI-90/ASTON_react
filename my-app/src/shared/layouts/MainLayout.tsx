import Header from '../../widgets/LayoutHeader/Header.tsx'
import Footer from '../../widgets/LayoutFooter/Footer.tsx'
import type {PropsWithChildren} from "react";

export default function MainLayout({children}: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
