import React, { useState, useEffect } from 'react';
import type { Movie } from '../types';

interface MovieFormProps {
  movie?: Movie | null;
  onSubmit: (movie: Omit<Movie, 'id'> | Movie) => void;
  onClose: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ movie, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    posterUrl: '',
    bannerUrl: '',
    genre: '',
    rating: '0',
    duration: '0',
    releaseDate: '',
    description: '',
  });

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title,
        posterUrl: movie.posterUrl,
        bannerUrl: movie.bannerUrl,
        genre: movie.genre.join(', '),
        rating: movie.rating.toString(),
        duration: movie.duration.toString(),
        releaseDate: movie.releaseDate,
        description: movie.description,
      });
    } else {
      // Reset form for new movie
      setFormData({
        title: '', posterUrl: '', bannerUrl: '', genre: '', rating: '0',
        duration: '0', releaseDate: '', description: '',
      });
    }
  }, [movie]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const movieData = {
      ...formData,
      genre: formData.genre.split(',').map(g => g.trim()),
      rating: parseFloat(formData.rating),
      duration: parseInt(formData.duration, 10),
      // Dummy data for cast, in a real app this would be more complex
      cast: movie?.cast || [{name: 'Actor 1', role: 'Main', image: 'https://picsum.photos/seed/actor-default/200/300'}]
    };
    if (movie) {
      onSubmit({ ...movie, ...movieData });
    } else {
      onSubmit(movieData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-black">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Poster URL</label>
        <input type="text" name="posterUrl" value={formData.posterUrl} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
       <div>
        <label className="block text-sm font-medium text-black">Banner URL</label>
        <input type="text" name="bannerUrl" value={formData.bannerUrl} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Genre (comma-separated)</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">Rating</label>
            <input type="number" name="rating" step="0.1" min="0" max="10" value={formData.rating} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Duration (minutes)</label>
            <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
          </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Release Date</label>
        <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2 bg-white text-[#212121]" rows={4} required></textarea>
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
        <button type="submit" className="bg-bms-primary text-white px-4 py-2 rounded-md hover:bg-red-700">{movie ? 'Update' : 'Create'} Movie</button>
      </div>
    </form>
  );
};

export default MovieForm;