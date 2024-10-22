import React from 'react';

const ListView = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Watchlists</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="w-full mb-4 p-2 border rounded-lg"
        />

        {/* Navigation */}
        <nav>
          <div className="mb-4">
            <button className="flex items-center space-x-2 text-white bg-red-500 w-full py-2 px-4 rounded-lg">
              <span className="material-icons">home</span>
              <span>Home</span>
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-2">My Lists</h2>
          <button className="flex items-center space-x-2 w-full py-2 px-4 border rounded-lg">
            <span className="material-icons">list</span>
            <span>Movies by Tom Cruise</span>
          </button>
        </nav>

        {/* User Section */}
        <div className="absolute bottom-4 flex items-center space-x-2 border-t pt-4 w-full">
          <span className="material-icons">account_circle</span>
          <span>Michael</span>
          <span className="ml-auto material-icons">more_horiz</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Movies by Tom Cruise</h1>
          <button className="text-gray-500 hover:text-black">
            <span className="material-icons">edit</span>
          </button>
        </div>

        {/* Description */}
        <p className="mb-6 text-gray-600">
          About this watchlist: This list lorem ipsum dolor et blah blah blah.
        </p>

        {/* Movie Cards */}
        <div className="grid grid-cols-4 gap-6">
          {/* Movie Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Movie Poster"
              className="w-full"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">83/100</span>
                <span className="material-icons text-green-500">check_circle</span>
              </div>
              <h3 className="font-semibold">Top Gun: Maverick (2022)</h3>
            </div>
          </div>

          {/* Add more Movie Cards similar to the first one */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Movie Poster"
              className="w-full"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">68/100</span>
                <span className="material-icons text-green-500">check_circle</span>
              </div>
              <h3 className="font-semibold">Fantastic Beasts: The Secrets of Dumbledore (2022)</h3>
            </div>
          </div>

          {/* Add more as needed */}
        </div>
      </div>
    </div>
  );
};

export default ListView;
