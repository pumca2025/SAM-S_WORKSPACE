
import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { Booking, Show, Movie, User } from '../types';
import { storageService } from '../services/storageService';

interface BookingContextType {
  bookings: Booking[];
  createBooking: (show: Show, movie: Movie, user: User, selectedSeats: number[]) => Booking;
  getBookingById: (id: string) => Booking | undefined;
  loading: boolean;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedBookings = storageService.get<Booking[]>('bookings', []);
    setBookings(storedBookings);
    setLoading(false);
  }, []);

  const createBooking = useCallback((show: Show, movie: Movie, user: User, selectedSeats: number[]): Booking => {
    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      userId: user.id,
      userEmail: user.email,
      showId: show.id,
      seats: selectedSeats,
      bookingDate: new Date().toISOString(),
      totalPrice: selectedSeats.length * show.pricePerSeat,
      movieTitle: movie.title,
      posterUrl: movie.posterUrl,
      theaterName: show.theaterName,
      showTime: show.time,
      showDate: show.date,
    };
    
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    storageService.set('bookings', updatedBookings);
    return newBooking;
  }, [bookings]);

  const getBookingById = useCallback((id: string) => bookings.find(b => b.id === id), [bookings]);

  return (
    <BookingContext.Provider value={{ bookings, createBooking, getBookingById, loading }}>
      {children}
    </BookingContext.Provider>
  );
};
