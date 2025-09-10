
import React, { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { useAuth } from '../hooks/useAuth';
import { useBookings } from '../hooks/useBookings';
import SeatSelector from '../components/SeatSelector';
import Spinner from '../components/Spinner';

const BookingPage: React.FC = () => {
  const { showId } = useParams<{ showId: string }>();
  const navigate = useNavigate();
  
  const { getShowById, getMovieById, updateShowWithBooking, loading: moviesLoading } = useMovies();
  const { user, loading: authLoading } = useAuth();
  const { createBooking, loading: bookingsLoading } = useBookings();

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  if (authLoading || moviesLoading || bookingsLoading) {
    return <div className="h-screen flex items-center justify-center"><Spinner /></div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const show = showId ? getShowById(showId) : undefined;
  const movie = show ? getMovieById(show.movieId) : undefined;

  if (!show || !movie) {
    return <div className="text-center py-10">Show not found.</div>;
  }

  const handleSeatSelect = (seatNumber: number) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    const booking = createBooking(show, movie, user, selectedSeats);
    updateShowWithBooking(show.id, selectedSeats);
    navigate(`/confirmation/${booking.id}`);
  };

  const totalPrice = selectedSeats.length * show.pricePerSeat;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-bms-secondary">{movie.title}</h1>
        <p className="text-lg text-bms-gray">{show.theaterName} | {new Date(show.date).toLocaleDateString()} at {show.time}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SeatSelector show={show} selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-bms-secondary">Booking Summary</h2>
            <div className="space-y-2">
              <p><strong>Movie:</strong> {movie.title}</p>
              <p><strong>Theater:</strong> {show.theaterName}</p>
              <p><strong>Time:</strong> {show.time}</p>
              <p><strong>Seats ({selectedSeats.length}):</strong> {selectedSeats.map(s => s + 1).join(', ') || 'None'}</p>
              <p className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={handleBooking}
              disabled={selectedSeats.length === 0}
              className="mt-6 w-full bg-bms-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
