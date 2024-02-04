import { Sidebar } from "./Sidebar"
import SearchIcon from "../../../assets/lupa.png"
import github from "../../../assets/github.png"
import linkedin from "../../../assets/linkedin.png"
export const NavBar = () => {
  return (
    <>
      <nav className="border-b-2 flex justify-center ">
        <div className="w-full justify-between flex items-center py-4 px-4 md:container lg:px-16">
          <div className="relative hidden md:inline-block">
            <input
              className="border  rounded-3xl py-1.5 pl-8  pr-8 focus-visible:outline-none bg-no-repeat  "
              type="text"
              placeholder="Buscar..."
              style={{
                backgroundImage: `url(${SearchIcon})`,
                backgroundSize: '18px 18px',
                backgroundPosition: 'left 8px center',
              }}
            />
          </div>
          <p className="font-openSans text-xl font-bold text-center uppercase">blog</p>
          <div className="flex space-x-4 items-center">
            <a className="hidden md:inline-block" href="#">
              <img className="h-4" src={github} alt="GitHub" />
            </a>
            <a className="hidden md:inline-block" href="#">
              <img className="h-4" src={linkedin} alt="LinkedIn" />
            </a>
            <Sidebar />
          </div>
        </div>
      </nav>
    </>
  )
}

