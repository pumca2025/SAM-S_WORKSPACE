import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import Spinner from '../components/Spinner';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getMovieById, getShowsByMovieId, loading } = useMovies();

  if (loading) {
    return <div className="h-screen flex items-center justify-center"><Spinner /></div>;
  }

  const movie = id ? getMovieById(id) : undefined;
  const shows = id ? getShowsByMovieId(id) : [];

  if (!movie) {
    return <div className="text-center py-10">Movie not found.</div>;
  }

  return (
    <div>
      <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${movie.bannerUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img src={movie.posterUrl} alt={movie.title} className="w-48 md:w-64 rounded-lg shadow-2xl" />
          <div className="pt-28 text-white">
            <h1 className="text-4xl font-bold drop-shadow-lg">{movie.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-lg">{movie.rating} ⭐</span>
              <span>•</span>
              <span className="text-lg">{movie.duration} min</span>
              <span>•</span>
              <span className="text-lg">{movie.genre.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-bms-text">About the movie</h2>
          <p className="text-bms-text">{movie.description}</p>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-bms-text">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movie.cast.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md" />
                <h3 className="font-semibold text-bms-text">{member.name}</h3>
                <p className="text-sm text-bms-text">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-bms-text">Showtimes</h2>
            {shows.length > 0 ? (
                <div>
                    {Array.from(new Set(shows.map(s => s.theaterName))).map(theater => (
                        <div key={theater} className="mb-4">
                            <h3 className="text-xl font-semibold border-b pb-2 mb-2 text-bms-text">{theater}</h3>
                            <div className="flex flex-wrap gap-2">
                                {shows.filter(s => s.theaterName === theater).map(show => (
                                    <Link key={show.id} to={`/book/${show.id}`} className="border border-bms-primary text-bms-primary px-4 py-2 rounded-md hover:bg-bms-primary hover:text-white transition-colors">
                                        {show.time}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-bms-text">No showtimes available for this movie yet.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;