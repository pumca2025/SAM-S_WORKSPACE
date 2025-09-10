export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin' | 'theater';
}

export interface CastMember {
  name: string;
  role: string;
  image: string;
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  bannerUrl: string;
  genre: string[];
  rating: number;
  duration: number; // in minutes
  releaseDate: string;
  description: string;
  cast: CastMember[];
}

export interface Show {
  id: string;
  movieId: string;
  theaterName: string;
  time: string;
  date: string;
  totalSeats: number; // e.g. 100 for a 10x10 grid
  bookedSeats: number[];
  pricePerSeat: number;
}

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  showId: string;
  seats: number[];
  bookingDate: string;
  totalPrice: number;
  movieTitle: string;
  posterUrl: string;
  theaterName: string;
  showTime: string;
  showDate: string;
}