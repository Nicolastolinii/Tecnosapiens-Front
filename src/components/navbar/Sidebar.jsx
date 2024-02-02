import React, { useState } from 'react';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative z-50" >
      <button
        className="flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleSidebar}
      >
        <span className="block h-0.5 w-8 bg-black "></span>
        <span
          className={`block h-0.5 bg-black my-2 transition-all duration-300 ${isHovered ? 'w-6 my-1.5' : 'w-8'}`}
        ></span>
        <span className={`block h-0.5 bg-black transition-all duration-300 ${isHovered ? 'w-2' : 'w-8'}`}></span>
      </button>
      <div className={`fixed  top-0 right-0 h-full w-[18rem] bg-white text-white transform ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button className="fixed top-4 right-4 text-white z-50" onClick={toggleSidebar}>
          <span className="block h-0.5 w-6 bg-black mb-1.5"></span>
          <span className="block h-0.5 w-6 bg-black mb-1.5"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </button>
        <div className="transition-all   px-10 mt-[4rem] w-full h-2/4 flex flex-col space-y-2 font-openSans text-[14px]   text-black">
          <a className='text-[#f79918] ease-in duration-150' href="/">Inicio</a>
          <a className='hover:text-[#f79918] ease-in duration-150' href="/categorias">Categorías</a>
          <a className='hover:text-[#f79918] ease-in duration-150' href="/viajes">Viajes</a>
          <a className='hover:text-[#f79918] ease-in duration-150' href="/otro1">Otro 1</a>
          <a className='hover:text-[#f79918] ease-in duration-150' href="/otro2">Otro 2</a>
        </div>
      </div>
    </div>
  );
};

