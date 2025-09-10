import React, { useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import type { Movie } from '../../types';
import Modal from '../../components/Modal';
import MovieForm from '../../components/MovieForm';
import Spinner from '../../components/Spinner';

const AdminMovies: React.FC = () => {
    const { movies, addMovie, updateMovie, deleteMovie, loading } = useMovies();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const handleOpenModal = (movie?: Movie) => {
        setSelectedMovie(movie || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    const handleSubmit = (movieData: Omit<Movie, 'id'> | Movie) => {
        if ('id' in movieData) {
            updateMovie(movieData as Movie);
        } else {
            addMovie(movieData);
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            deleteMovie(id);
        }
    };
    
    if (loading) return <Spinner />;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-black">Manage Movies</h1>
                <button onClick={() => handleOpenModal()} className="bg-bms-primary text-white px-4 py-2 rounded-md hover:bg-red-700">Add Movie</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left text-black">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Poster</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Genre</th>
                            <th className="p-2">Rating</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie.id} className="border-b">
                                <td className="p-2"><img src={movie.posterUrl} alt={movie.title} className="h-16 w-12 object-cover rounded" /></td>
                                <td className="p-2 font-semibold">{movie.title}</td>
                                <td className="p-2">{movie.genre.join(', ')}</td>
                                <td className="p-2">{movie.rating}</td>
                                <td className="p-2">
                                    <button onClick={() => handleOpenModal(movie)} className="text-blue-600 hover:underline mr-2">Edit</button>
                                    <button onClick={() => handleDelete(movie.id)} className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedMovie ? 'Edit Movie' : 'Add Movie'}>
                <MovieForm movie={selectedMovie} onSubmit={handleSubmit} onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default AdminMovies;