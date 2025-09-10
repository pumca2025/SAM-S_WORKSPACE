
import React from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
        <img className="w-full h-96 object-cover" src={movie.posterUrl} alt={movie.title} />
        <div className="p-4">
          <h3 className="text-lg font-bold text-bms-secondary truncate">{movie.title}</h3>
          <p className="text-sm text-bms-gray">{movie.genre.join(', ')}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
