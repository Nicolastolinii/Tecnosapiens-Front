import { Sidebar } from "./Sidebar"
import SearchIcon from "../../assets/lupa.png"
export const NavBar = () => {
  return (
    <>
    <nav className="border-b-2 flex justify-center">
       <div className="w-full justify-between flex items-center py-4 px-4 container ">
       <div className="relative">
            <input
              className="border  rounded-3xl p-1 pl-6  pr-8 focus-visible:outline-none bg-no-repeat  "
              type="text"
              placeholder="Buscar..."
              style={{
                backgroundImage: `url(${SearchIcon})`,
                backgroundSize: '18px 18px',
                backgroundPosition: 'left 4px center',
              }}
            />
          </div>
          <p className="font-openSans text-xl font-bold text-center uppercase">blog</p>
          <Sidebar/>
        </div> 
    </nav>
    </>
  )
}

