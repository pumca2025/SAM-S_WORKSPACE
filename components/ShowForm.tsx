import React, { useState, useEffect } from 'react';
import type { Show, Movie } from '../types';

interface ShowFormProps {
  show?: Show | null;
  movies: Movie[];
  onSubmit: (show: Omit<Show, 'id'> | Show) => void;
  onClose: () => void;
}

const ShowForm: React.FC<ShowFormProps> = ({ show, movies, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    movieId: '',
    theaterName: '',
    date: '',
    time: '',
    totalSeats: '80',
    pricePerSeat: '15',
  });

  useEffect(() => {
    if (show) {
      setFormData({
        movieId: show.movieId,
        theaterName: show.theaterName,
        date: show.date,
        time: show.time,
        totalSeats: show.totalSeats.toString(),
        pricePerSeat: show.pricePerSeat.toString(),
      });
    } else {
      // Reset form for new show, pre-selecting the first movie if available
      setFormData({
        movieId: movies.length > 0 ? movies[0].id : '',
        theaterName: '',
        date: '',
        time: '',
        totalSeats: '80',
        pricePerSeat: '15',
      });
    }
  }, [show, movies]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const showData = {
      ...formData,
      totalSeats: parseInt(formData.totalSeats, 10),
      pricePerSeat: parseFloat(formData.pricePerSeat),
      bookedSeats: show?.bookedSeats || [], // Preserve booked seats on edit
    };
    if (show) {
      onSubmit({ ...show, ...showData });
    } else {
      // Fix: The object passed to onSubmit for a new show must include `bookedSeats` to satisfy `Omit<Show, 'id'>`.
      // The previous implementation incorrectly removed it. `showData` contains `bookedSeats: []` for a new show.
      onSubmit(showData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-black">Movie</label>
        <select name="movieId" value={formData.movieId} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required>
            <option value="" disabled>Select a movie</option>
            {movies.map(movie => (
                <option key={movie.id} value={movie.id}>{movie.title}</option>
            ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Theater Name</label>
        <input type="text" name="theaterName" value={formData.theaterName} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-black">Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
        </div>
        <div>
            <label className="block text-sm font-medium text-black">Time</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
        </div>
      </div>
       <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">Total Seats</label>
            <input type="number" name="totalSeats" min="1" value={formData.totalSeats} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Price Per Seat ($)</label>
            <input type="number" name="pricePerSeat" min="0" step="0.01" value={formData.pricePerSeat} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
          </div>
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
        <button type="submit" className="bg-bms-primary text-white px-4 py-2 rounded-md hover:bg-red-700">{show ? 'Update' : 'Create'} Show</button>
      </div>
    </form>
  );
};

export default ShowForm;