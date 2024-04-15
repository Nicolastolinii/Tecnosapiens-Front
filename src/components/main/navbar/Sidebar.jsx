import React, { useState } from 'react';
import { useAuth } from '../../../utils/AuthProvider';
import { Link } from 'react-router-dom';
import useFetch from '../../../utils/useFetch';

export const Sidebar = () => {
  const { token, API, UserName, logout } = useAuth();
  const user = UserName();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); 
  const { data } = useFetch(`${API}/blog/category`)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    logout();
  };
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="relative z-50">
      <button aria-label='Desplegar menú'
        className="flex px-2 py-2 flex-col sm:ml-0 lg:ml-[8rem] md:ml-[5rem]"
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
        className={`fixed top-0 right-0 h-full w-[18rem] font-poppins font-semibold bg-white text-white transform ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <button aria-label='Desplegar menú' className="fixed top-4 right-4 text-white z-50" onClick={toggleSidebar}>
          <span className="block h-0.5 w-6 bg-black transform rotate-45 translate-y-1"></span>
          <span className="block h-0.5 w-6 bg-black transform -rotate-45 translate-y-0.5"></span>
        </button>
        <div className="transition-all px-10 mt-[4rem] w-full h-2/4 flex flex-col space-y-2 font-poppins text-[14px] text-black">

          {
            token && user ? (
              <Link className='text-[#f79918] ease-in duration-150 uppercase' to={"/profile"}>{user}</Link>
            ) : (
              <Link className='text-[#f79918] ease-in duration-150' to="/">Bienvenido</Link>

            )
          }

          <button aria-label='boton del menu' className="text-left hover:text-[#f79918] ease-in duration-150 focus:outline-none flex items-center justify-between w-full" onClick={toggleCategories}>
            <span>Categorías</span>
            {isCategoriesOpen ? <span>▲</span> : <span>▼</span>}
          </button>
          {isCategoriesOpen && (
            <>
              {
                data?.map((category, index) => (
                  <Link key={index} className='pl-2 text-xs  hover:text-[#f79918] ease-in duration-150' to={`/filter?categoria=${category}`}>• {category.toUpperCase()}</Link>
                ))
              }
            </>
          )}
          {
            token ?
              <div className='flex flex-col'>
                <Link to={"/create"} className='hover:text-[#f79918] ease-in duration-150'>
                CreateBlog
              </Link>
              <button onClick={handleLogout} className='w-full mt-10 bg-[#f79a18c7] rounded py-2'>Logout</button>
              </div>
              : ""
          }
          {
            token ? ""
              :
              <Link className='hover:text-[#f79918] ease-in duration-150' to="/login">Login</Link>

          }

        </div>
      </div>
    </div>
  );
};
