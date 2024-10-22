import React from 'react'

const MovieCards = () => {
    return(
        <div className="grid grid-cols-4 gap-6">
          {/* Movie Card */}
          {['Top Gun: Maverick', 'Fantastic Beasts: The Secrets of Dumbledore'].map((movie, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="relative">
                <img
                  src={`https://via.placeholder.com/150?text=${encodeURIComponent(movie)}`}
                  alt={movie}
                  className="w-full h-48 object-cover rounded-md"
                />
                <button className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-full">
                  +
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">{movie}</h3>
                <p className="text-gray-500 text-sm">2022</p>
                <p className="text-green-600 font-bold mt-2">83/100</p>
              </div>
            </div>
          ))}
        </div>
    );
}

export default MovieCards;