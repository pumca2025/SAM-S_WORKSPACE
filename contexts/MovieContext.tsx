import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { Movie, Show } from '../types';
import { initialMovies, initialShows } from '../data/initialData';
import { storageService } from '../services/storageService';

interface MovieContextType {
  movies: Movie[];
  shows: Show[];
  getMovieById: (id: string) => Movie | undefined;
  getShowsByMovieId: (movieId: string) => Show[];
  getShowById: (id: string) => Show | undefined;
  addMovie: (movie: Omit<Movie, 'id'>) => void;
  updateMovie: (movie: Movie) => void;
  deleteMovie: (id: string) => void;
  addShow: (show: Omit<Show, 'id' | 'bookedSeats'>) => void;
  updateShow: (show: Show) => void;
  deleteShow: (id: string) => void;
  updateShowWithBooking: (showId: string, newBookedSeats: number[]) => void;
  loading: boolean;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedMovies = storageService.get<Movie[]>('movies', []);
    if (storedMovies.length === 0) {
      storageService.set('movies', initialMovies);
      setMovies(initialMovies);
    } else {
      setMovies(storedMovies);
    }

    const storedShows = storageService.get<Show[]>('shows', []);
     if (storedShows.length === 0) {
      storageService.set('shows', initialShows);
      setShows(initialShows);
    } else {
      setShows(storedShows);
    }
    setLoading(false);
  }, []);
  
  const getMovieById = useCallback((id: string) => movies.find(m => m.id === id), [movies]);
  const getShowsByMovieId = useCallback((movieId: string) => shows.filter(s => s.movieId === movieId), [shows]);
  const getShowById = useCallback((id: string) => shows.find(s => s.id === id), [shows]);

  const addMovie = useCallback((movieData: Omit<Movie, 'id'>) => {
    const newMovie: Movie = { ...movieData, id: `movie-${Date.now()}` };
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    storageService.set('movies', updatedMovies);
  }, [movies]);

  const updateMovie = useCallback((updatedMovie: Movie) => {
    const updatedMovies = movies.map(m => m.id === updatedMovie.id ? updatedMovie : m);
    setMovies(updatedMovies);
    storageService.set('movies', updatedMovies);
  }, [movies]);

  const deleteMovie = useCallback((id: string) => {
    const updatedMovies = movies.filter(m => m.id !== id);
    setMovies(updatedMovies);
    storageService.set('movies', updatedMovies);
  }, [movies]);

  const addShow = useCallback((showData: Omit<Show, 'id' | 'bookedSeats'>) => {
    const newShow: Show = { ...showData, id: `show-${Date.now()}`, bookedSeats: [] };
    const updatedShows = [...shows, newShow];
    setShows(updatedShows);
    storageService.set('shows', updatedShows);
  }, [shows]);

  const updateShow = useCallback((updatedShow: Show) => {
    const updatedShows = shows.map(s => s.id === updatedShow.id ? updatedShow : s);
    setShows(updatedShows);
    storageService.set('shows', updatedShows);
  }, [shows]);

  const deleteShow = useCallback((id: string) => {
    const updatedShows = shows.filter(s => s.id !== id);
    setShows(updatedShows);
    storageService.set('shows', updatedShows);
  }, [shows]);


  const updateShowWithBooking = useCallback((showId: string, newBookedSeats: number[]) => {
      const updatedShows = shows.map(show => {
          if (show.id === showId) {
              return { ...show, bookedSeats: [...show.bookedSeats, ...newBookedSeats] };
          }
          return show;
      });
      setShows(updatedShows);
      storageService.set('shows', updatedShows);
  }, [shows]);

  return (
    <MovieContext.Provider value={{ movies, shows, getMovieById, getShowsByMovieId, getShowById, addMovie, updateMovie, deleteMovie, addShow, updateShow, deleteShow, updateShowWithBooking, loading }}>
      {children}
    </MovieContext.Provider>
  );
};