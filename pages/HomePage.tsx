
import React, { useState, useMemo } from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import FilterBar from '../components/FilterBar';
import Spinner from '../components/Spinner';

const HomePage: React.FC = () => {
  const { movies, loading } = useMovies();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = useMemo(() => {
    const allGenres = movies.flatMap(movie => movie.genre);
    return [...new Set(allGenres)];
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
      return matchesSearch && matchesGenre;
    });
  }, [movies, searchTerm, selectedGenre]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center"><Spinner /></div>;
  }
  
  const heroMovie = movies[0];

  return (
    <div>
        {heroMovie && (
            <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${heroMovie.bannerUrl})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 md:p-12">
                     <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-bold">{heroMovie.title}</h1>
                        <p className="text-lg">{heroMovie.genre.join(', ')}</p>
                    </div>
                </div>
            </div>
        )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
        />
        
        <h2 className="text-2xl font-bold mb-6 text-bms-secondary">Now Showing</h2>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-bms-gray">No movies found. Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
