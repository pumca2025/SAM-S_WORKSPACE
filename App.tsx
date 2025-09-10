import React from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMovies from './pages/admin/AdminMovies';
import AdminBookings from './pages/admin/AdminBookings';
import AdminSidebar from './components/AdminSidebar';
import TheaterShows from './pages/theater/TheaterShows';
import TheaterSidebar from './components/TheaterSidebar';
import { useAuth } from './hooks/useAuth';

const UserLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-bms-light-gray text-bms-dark">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const AdminLayout: React.FC = () => (
    <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        <main className="flex-grow p-4 md:p-8 ml-0 md:ml-64">
            <Outlet />
        </main>
    </div>
);

const TheaterLayout: React.FC = () => (
    <div className="flex min-h-screen bg-gray-100">
        <TheaterSidebar />
        <main className="flex-grow p-4 md:p-8 ml-0 md:ml-64">
            <Outlet />
        </main>
    </div>
);

const AdminProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { user } = useAuth();
    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const TheaterProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { user } = useAuth();
    if (!user || user.role !== 'theater') {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/book/:showId" element={<BookingPage />} />
          <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
        </Route>

        <Route path="/admin" element={
            <AdminProtectedRoute>
                <AdminLayout />
            </AdminProtectedRoute>
        }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="movies" element={<AdminMovies />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        <Route path="/theater" element={
            <TheaterProtectedRoute>
                <TheaterLayout />
            </TheaterProtectedRoute>
        }>
            <Route path="shows" element={<TheaterShows />} />
            <Route index element={<Navigate to="shows" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;