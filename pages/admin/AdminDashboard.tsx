import React from 'react';
import { useMovies } from '../../hooks/useMovies';
import { useBookings } from '../../hooks/useBookings';
import Spinner from '../../components/Spinner';

const StatCard: React.FC<{ title: string; value: number | string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-3 bg-bms-primary text-white rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-black">{title}</p>
            <p className="text-2xl font-bold text-black">{value}</p>
        </div>
    </div>
);

const AdminDashboard: React.FC = () => {
    const { movies, shows, loading: moviesLoading } = useMovies();
    const { bookings, loading: bookingsLoading } = useBookings();

    if (moviesLoading || bookingsLoading) {
        return <Spinner />;
    }
    
    const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-black">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Movies" 
                    value={movies.length}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>} 
                />
                <StatCard 
                    title="Total Shows" 
                    value={shows.length}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
                />
                <StatCard 
                    title="Total Bookings" 
                    value={bookings.length}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>}
                />
                 <StatCard 
                    title="Total Revenue" 
                    value={`$${totalRevenue.toFixed(2)}`}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                />
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-black">Recent Bookings</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-black">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2">Movie</th>
                                <th className="p-2">User</th>
                                <th className="p-2">Seats</th>
                                <th className="p-2">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.slice(-5).reverse().map(booking => (
                                <tr key={booking.id} className="border-b">
                                    <td className="p-2">{booking.movieTitle}</td>
                                    <td className="p-2">{booking.userEmail}</td>
                                    <td className="p-2">{booking.seats.length}</td>
                                    <td className="p-2">${booking.totalPrice.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;