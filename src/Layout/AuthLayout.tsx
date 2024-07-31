import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className=" text-gray-800 px-4 py-2">
                <h1>Mon-Chauffeurs</h1>
            </header>
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <footer className=" text-gray-800 text-center text-xs p-4 mt-auto">
                <p>&copy; {new Date().getFullYear()} Mon-Chauffeurs. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AuthLayout;
