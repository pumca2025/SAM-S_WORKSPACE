
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useBookings } from '../hooks/useBookings';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/Spinner';

const ConfirmationPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const { getBookingById, loading: bookingsLoading } = useBookings();
  const { user, loading: authLoading } = useAuth();
  
  if (authLoading || bookingsLoading) {
    return <div className="h-screen flex items-center justify-center"><Spinner /></div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const booking = bookingId ? getBookingById(bookingId) : undefined;

  if (!booking) {
    return <div className="text-center py-10">Booking not found.</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl font-bold text-bms-secondary mb-2">Booking Confirmed!</h1>
        <p className="text-bms-gray mb-6">Thank you for your purchase. Your e-ticket has been sent to {booking.userEmail}.</p>
        
        <div className="border-t border-b py-6 my-6 flex flex-col md:flex-row justify-center items-center gap-8">
            <img src={booking.posterUrl} alt={booking.movieTitle} className="w-32 rounded-lg shadow-md" />
            <div className="text-left">
                <h2 className="text-2xl font-bold">{booking.movieTitle}</h2>
                <p><strong>Theater:</strong> {booking.theaterName}</p>
                <p><strong>Date & Time:</strong> {new Date(booking.showDate).toLocaleDateString()} at {booking.showTime}</p>
                <p><strong>Seats:</strong> {booking.seats.map(s => `Seat ${s + 1}`).join(', ')}</p>
                <p className="text-lg font-bold mt-2">Total Paid: ${booking.totalPrice.toFixed(2)}</p>
            </div>
        </div>

        <Link to="/" className="inline-block bg-bms-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
