import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `flex items-center p-2 rounded-lg transition-colors duration-200 ${
            isActive ? 'bg-bms-primary text-white' : 'text-black hover:bg-gray-100 hover:text-bms-primary'
        }`;

    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-20 p-2 bg-bms-secondary text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Hamburger Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-10`}>
                <div className="p-4 border-b">
                    <h2 className="text-2xl font-bold text-black">Admin Panel</h2>
                </div>
                <nav className="p-4">
                    <ul>
                        <li className="mb-2">
                            <NavLink to="/admin/dashboard" className={navLinkClasses}>Dashboard</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to="/admin/movies" className={navLinkClasses}>Movies</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to="/admin/bookings" className={navLinkClasses}>Bookings</NavLink>
                        </li>
                         <li className="mb-2">
                            <NavLink to="/" className={navLinkClasses}>Back to Site</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default AdminSidebar;