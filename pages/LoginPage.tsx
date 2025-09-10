import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Added for realism, though not used in logic
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'theater') {
        navigate('/theater/shows');
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email.');
      return;
    }
    setError('');
    login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bms-light-gray">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-8">
        <div className="text-center">
            <h1 className="text-bms-primary font-bold text-4xl mb-2">
                BookMyShow
            </h1>
            <h2 className="text-2xl font-bold text-bms-secondary">Sign in to your account</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#212121] bg-white focus:outline-none focus:ring-bms-primary focus:border-bms-primary sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <p className="mt-2 text-xs text-gray-500">
                Use 'admin@bookmyshow.com' for admin, 'theater@bookmyshow.com' for theater, or any other email for user access.
             </p>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#212121] bg-white focus:outline-none focus:ring-bms-primary focus:border-bms-primary sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-bms-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
              Sign in
            </button>
          </div>
        </form>
         <div className="text-center">
            <Link to="/" className="font-medium text-bms-primary hover:text-red-700">
                &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;