import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/Footer/Footer"

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}