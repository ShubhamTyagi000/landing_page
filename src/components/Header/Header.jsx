import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between
                items-center mx-auto max-w-screen-xl">
                    <Link to='/' className="flex items-center">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo"
                        className="mr-3 h-12"/>
                    
                    </Link>
                </div>
            </nav>
        </header>
    )
}