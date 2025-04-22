import React from 'react';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useTask } from '../context/TaskContext';

const Navbar = () => {
  const { setLightMode, lightMode } = useTask()

  const setHandleClick = () => {
    setLightMode(!lightMode);
    console.log("Mode changed");
  };

  return (
    <div className={`flex justify-between items-center ${lightMode ? 'bg-white text-gray-700 border-b border-gray-200' : 'bg-gray-950 text-gray-200'} py-4 px-6 shadow-sm`}>
      <div className="text-3xl font-bold tracking-wide">Task Manager</div>
      <nav className="flex space-x-8 items-center">
        <Link
          to="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 ${lightMode ? 'text-blue-700' : 'text-blue-400'
            }`}
        >
          Home <FaHome />
        </Link>
      
      <button
        onClick={setHandleClick}
        className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${lightMode
            ? 'bg-gray-200 hover:bg-gray-300 text-yellow-500'
            : 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
          }`}
      >
        {lightMode ? <MdDarkMode size={28} /> : <MdLightMode size={28} />}
      </button>
      </nav>
    </div>
  );
};

export default Navbar;
