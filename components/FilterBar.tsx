import React from 'react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  genres: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ searchTerm, setSearchTerm, selectedGenre, setSelectedGenre, genres }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center">
      <div className="flex-grow w-full md:w-auto">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-white text-[#212121] focus:outline-none focus:ring-2 focus:ring-bms-primary"
        />
      </div>
      <div className="w-full md:w-auto">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-white text-[#212121] focus:outline-none focus:ring-2 focus:ring-bms-primary"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;