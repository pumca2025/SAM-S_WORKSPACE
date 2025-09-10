import React, { useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import type { Show } from '../../types';
import Modal from '../../components/Modal';
import ShowForm from '../../components/ShowForm';
import Spinner from '../../components/Spinner';

const TheaterShows: React.FC = () => {
    const { movies, shows, addShow, updateShow, deleteShow, loading, getMovieById } = useMovies();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);

    const handleOpenModal = (show?: Show) => {
        setSelectedShow(show || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedShow(null);
    };

    const handleSubmit = (showData: Omit<Show, 'id'> | Show) => {
        if ('id' in showData) {
            updateShow(showData as Show);
        } else {
            addShow(showData as Omit<Show, 'id' | 'bookedSeats'>);
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this show?')) {
            deleteShow(id);
        }
    };
    
    if (loading) return <Spinner />;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-black">Manage Shows</h1>
                <button onClick={() => handleOpenModal()} className="bg-bms-primary text-white px-4 py-2 rounded-md hover:bg-red-700">Add Show</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left text-black">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Movie Title</th>
                            <th className="p-2">Theater</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Time</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shows.map(show => (
                            <tr key={show.id} className="border-b">
                                <td className="p-2 font-semibold">{getMovieById(show.movieId)?.title || 'Unknown Movie'}</td>
                                <td className="p-2">{show.theaterName}</td>
                                <td className="p-2">{show.date}</td>
                                <td className="p-2">{show.time}</td>
                                <td className="p-2">${show.pricePerSeat.toFixed(2)}</td>
                                <td className="p-2">
                                    <button onClick={() => handleOpenModal(show)} className="text-blue-600 hover:underline mr-2">Edit</button>
                                    <button onClick={() => handleDelete(show.id)} className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 {shows.length === 0 && <p className="text-center p-4 text-black">No shows found. Click 'Add Show' to create one.</p>}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedShow ? 'Edit Show' : 'Add Show'}>
                <ShowForm show={selectedShow} movies={movies} onSubmit={handleSubmit} onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default TheaterShows;
