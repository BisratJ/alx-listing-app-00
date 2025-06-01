import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-2xl font-bold flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          <span>Logo</span>
        </div>
        <nav className="flex space-x-4 w-full md:w-auto justify-center md:justify-start">
          <a href="#" className="text-gray-600 hover:text-gray-800">Rooms</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Mansion</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Countryside</a>
        </nav>
        <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
          <form className="relative w-full max-w-xs md:max-w-none">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </form>
          <button className="text-gray-600 hover:text-gray-800 whitespace-nowrap">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded whitespace-nowrap">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
