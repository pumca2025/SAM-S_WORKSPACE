
import type { Movie, Show } from '../types';

export const initialMovies: Movie[] = [
  {
    id: '1',
    title: 'Stellar Odyssey',
    posterUrl: 'https://picsum.photos/seed/movie1/400/600',
    bannerUrl: 'https://picsum.photos/seed/banner1/1200/400',
    genre: ['Sci-Fi', 'Adventure'],
    rating: 8.5,
    duration: 152,
    releaseDate: '2024-07-15',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    cast: [
      { name: 'Leo Maxwell', role: 'Captain', image: 'https://picsum.photos/seed/actor1/200/300' },
      { name: 'Aria Vance', role: 'Scientist', image: 'https://picsum.photos/seed/actor2/200/300' },
    ],
  },
  {
    id: '2',
    title: 'Echoes of the Past',
    posterUrl: 'https://picsum.photos/seed/movie2/400/600',
    bannerUrl: 'https://picsum.photos/seed/banner2/1200/400',
    genre: ['Thriller', 'Mystery'],
    rating: 7.9,
    duration: 128,
    releaseDate: '2024-06-20',
    description: 'A detective haunted by his past uncovers a conspiracy while investigating a series of murders.',
    cast: [
      { name: 'Jax Ryder', role: 'Detective', image: 'https://picsum.photos/seed/actor3/200/300' },
      { name: 'Lena Petrova', role: 'Informant', image: 'https://picsum.photos/seed/actor4/200/300' },
    ],
  },
  {
    id: '3',
    title: 'The Last Stand',
    posterUrl: 'https://picsum.photos/seed/movie3/400/600',
    bannerUrl: 'https://picsum.photos/seed/banner3/1200/400',
    genre: ['Action', 'War'],
    rating: 9.1,
    duration: 175,
    releaseDate: '2024-08-01',
    description: 'A small group of soldiers must defend a critical outpost against overwhelming odds.',
    cast: [
        { name: 'Marcus Thorne', role: 'Sergeant', image: 'https://picsum.photos/seed/actor5/200/300' },
        { name: 'Eva Rostova', role: 'Medic', image: 'https://picsum.photos/seed/actor6/200/300' },
    ],
  },
   {
    id: '4',
    title: 'Cybernetic Dreams',
    posterUrl: 'https://picsum.photos/seed/movie4/400/600',
    bannerUrl: 'https://picsum.photos/seed/banner4/1200/400',
    genre: ['Sci-Fi', 'Action'],
    rating: 8.2,
    duration: 140,
    releaseDate: '2024-05-10',
    description: 'In a futuristic city, a cyborg questions her reality and fights against the corporation that created her.',
    cast: [
        { name: 'Cyra-7', role: 'Cyborg', image: 'https://picsum.photos/seed/actor7/200/300' },
        { name: 'Kaelen', role: 'Rebel Leader', image: 'https://picsum.photos/seed/actor8/200/300' },
    ],
  },
];

export const initialShows: Show[] = [
    { id: 's1', movieId: '1', theaterName: 'Galaxy Cineplex', time: '18:00', date: '2024-08-10', totalSeats: 80, bookedSeats: [5, 6, 7, 15, 25, 30], pricePerSeat: 15 },
    { id: 's2', movieId: '1', theaterName: 'Galaxy Cineplex', time: '21:00', date: '2024-08-10', totalSeats: 80, bookedSeats: [10, 11, 20, 21, 22, 40], pricePerSeat: 15 },
    { id: 's3', movieId: '1', theaterName: 'Starlight Drive-in', time: '20:30', date: '2024-08-11', totalSeats: 100, bookedSeats: [], pricePerSeat: 12 },
    { id: 's4', movieId: '2', theaterName: 'Metro Cinema', time: '17:30', date: '2024-08-10', totalSeats: 60, bookedSeats: [1, 2, 3], pricePerSeat: 14 },
    { id: 's5', movieId: '2', theaterName: 'Metro Cinema', time: '20:00', date: '2024-08-10', totalSeats: 60, bookedSeats: [30, 31, 32, 50, 51, 52], pricePerSeat: 14 },
    { id: 's6', movieId: '3', theaterName: 'IMAX Central', time: '19:00', date: '2024-08-11', totalSeats: 120, bookedSeats: [100, 101, 102, 103, 110], pricePerSeat: 20 },
    { id: 's7', movieId: '4', theaterName: 'Galaxy Cineplex', time: '19:30', date: '2024-08-11', totalSeats: 80, bookedSeats: [4, 12, 13, 22, 23, 34], pricePerSeat: 16 },
];
