import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';

const SideBar = () =>{
    return (
        <aside className="w-1/4 bg-gray-50 p-4 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-red-500 text-4xl font-bold ml-12">Watchlists</h1>
        <div className="mt-4 flex items-center w-full border border-gray-300 rounded-md">
          <SearchIcon className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-3 outline-none"
          />
        </div>

        <nav className="mt-6">
          <ul>
            <li className="flex items-center p-2 text-lg font-semibold text-white bg-red-500 rounded-lg mb-4">
              <HomeIcon className="w-6 h-6 mr-2 text-white" /> Home
            </li>
            <hr className="border-t-2 border-gray-300 my-2" />
            <li className="p-2 text-lg font-semibold text-gray-700 rounded-lg hover:bg-gray-200">
              My Lists
            </li>
          </ul>
        </nav>
      </div>

      {/* Guest Information Div */}
      <div className="flex items-center justify-between w-full max-w-xs p-3 border rounded-lg shadow-md bg-white mt-auto">
        {/* Icon */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 1c-3.48 0-6 2.52-6 6h12c0-3.48-2.52-6-6-6z"
              />
            </svg>
          </div>

          {/* Guest Text */}
          <span className="text-gray-700 font-medium">GUEST</span>
        </div>

        {/* Ellipsis Menu */}
        <div className="flex space-x-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  </div>
      </div>
    </aside>
    )
}
export default SideBar;