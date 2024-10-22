import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import MovieCards from './MovieCards';
import SideBar from './SideBar';

const SearchView = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      {/* Main content */}
      <main className="w-3/4 p-8 bg-white">
        <div className="border-2 border-red-500 rounded-lg p-4 mb-6">
            <h2 className="text-3xl font-semibold mb-6">
                Welcome to <span className="text-red-500">Watchlists</span>
            </h2>
            <p className="text-black mb-6">
                Browse movies, add them to watchlists and share them with friends.
            
            <div className="text-black mb-6">
                Just click the{' '}
                <span className="bg-blue-200 text-blue-800 font-bold rounded px-2 py-1">+</span> to add a movie, the poster to see more details, or{' '}
                <span className="bg-green-200 text-green-800 font-bold rounded px-2 py-1">✓</span> to mark the movie as watched.
            </div>
            </p>
        </div>
        {/* Search Bar */}
        <div className="mb-6 w-full flex">
          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" /> {/* Adjust size here */}
              <input
                type="text"
                placeholder="Search for movies..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md placeholder-black" // Keep the left padding for the icon
              />
          </div>
            <button className="bg-red-500 text-white px-4 py-3 rounded-r-md">Search</button>
        </div>
        <MovieCards />
      </main>
    </div>
  );
};
export default SearchView;
