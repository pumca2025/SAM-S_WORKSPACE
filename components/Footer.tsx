
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bms-secondary text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-bms-gray">
          <p>&copy; {new Date().getFullYear()} BookMyShow Clone. All rights reserved.</p>
          <p className="text-sm">This is a clone project for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
