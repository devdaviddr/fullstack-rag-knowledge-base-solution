import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <nav className="container mx-auto">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <Outlet /> {/* This renders the matched page component */}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 My App. All rights reserved.</p>
            </footer>
        </div>
    )
}