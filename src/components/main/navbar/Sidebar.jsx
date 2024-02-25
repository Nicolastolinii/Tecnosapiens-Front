import React, { useState } from 'react';
import { useAuth } from '../../../utils/AuthProvider';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { token } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Nuevo estado para controlar si la sección de categorías está abierta o cerrada

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="relative z-50">
      <button
        className="flex flex-col sm:ml-0 lg:ml-[8rem] md:ml-[5rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleSidebar}
      >
        <span className="block h-0.5 w-7 bg-black"></span>
        <span
          className={`block h-0.5 bg-black  transition-all duration-300 ${isHovered ? 'w-4 my-1' : 'w-7 my-2'
            }`}
        ></span>
        <span
          className={`block h-0.5 bg-black transition-all duration-300 ${isHovered ? 'w-2' : 'w-7'
            }`}
        ></span>
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-[18rem] bg-white text-white transform ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <button className="fixed top-4 right-4 text-white z-50" onClick={toggleSidebar}>
          <span className="block h-0.5 w-6 bg-black transform rotate-45 translate-y-1"></span>
          <span className="block h-0.5 w-6 bg-black transform -rotate-45 translate-y-0.5"></span>
        </button>
        <div className="transition-all px-10 mt-[4rem] w-full h-2/4 flex flex-col space-y-2 font-openSans text-[14px] text-black">
          <a className='text-[#f79918] ease-in duration-150' href="/">Inicio</a>
          <button className="text-left hover:text-[#f79918] ease-in duration-150 focus:outline-none flex items-center justify-between w-full" onClick={toggleCategories}>
            <span>Categorías</span>
            {isCategoriesOpen ? <span>▲</span> : <span>▼</span>}
          </button>
          {isCategoriesOpen && (
            <>
              <a className='pl-2 hover:text-[#f79918] ease-in duration-150' href="/categoria1">• Categoría 1</a>
              <a className='pl-2 hover:text-[#f79918] ease-in duration-150' href="/categoria2">• Categoría 2</a>
            </>
          )}
          {
            token ? 
            <Link to={"/create"}  className='hover:text-[#f79918] ease-in duration-150'>
            CreateBlog
            </Link>
            : ""
          }
        </div>
      </div>
    </div>
  );
};
