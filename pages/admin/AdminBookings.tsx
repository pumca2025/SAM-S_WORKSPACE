import React from 'react';
import { useBookings } from '../../hooks/useBookings';
import Spinner from '../../components/Spinner';

const AdminBookings: React.FC = () => {
    const { bookings, loading } = useBookings();

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-black">All Bookings</h1>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                {bookings.length > 0 ? (
                    <table className="w-full text-left text-black">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2">Booking ID</th>
                                <th className="p-2">User Email</th>
                                <th className="p-2">Movie</th>
                                <th className="p-2">Theater</th>
                                <th className="p-2">Seats</th>
                                <th className="p-2">Total</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking.id} className="border-b">
                                    <td className="p-2 text-sm">{booking.id}</td>
                                    <td className="p-2">{booking.userEmail}</td>
                                    <td className="p-2 font-semibold">{booking.movieTitle}</td>
                                    <td className="p-2">{booking.theaterName}</td>
                                    <td className="p-2">{booking.seats.length}</td>
                                    <td className="p-2">${booking.totalPrice.toFixed(2)}</td>
                                    <td className="p-2">{new Date(booking.bookingDate).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center p-4 text-black">No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminBookings;