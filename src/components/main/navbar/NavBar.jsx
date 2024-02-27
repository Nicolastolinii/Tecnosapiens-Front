import { Sidebar } from "./Sidebar"
import SearchIcon from "../../../assets/lupa.png"
import github from "../../../assets/github.png"
import linkedin from "../../../assets/linkedin.png"
import { Link, useNavigate } from "react-router-dom"
export const NavBar = ({input = true}) => {
  const navigate = useNavigate();
  const handleFilter = (event) => {
    if (event.keyCode === 13) {
      const filterValue = event.target.value.toLowerCase();
      navigate(`/filter?categoria=${filterValue}`);
    }
  };
  return (
    <>
      <nav className="border-b-2  flex justify-center fixed top-0 w-full bg-[#F9F9FE] z-50">
        <div className="w-full justify-between flex items-center py-4 px-4 md:container lg:px-16">
          {
            input ?
            <div className="relative hidden md:inline-block">
            <input
              className={`border ${input ? "" : "hidden"} rounded-3xl py-1.5 pl-8  pr-8 focus-visible:outline-none bg-no-repeat`}
              type="text"
              placeholder="Buscar..."
              onKeyDown={handleFilter}
              style={{
                backgroundImage: `url(${SearchIcon})`,
                backgroundSize: '18px 18px',
                backgroundPosition: 'left 8px center',
              }}
            />
          </div>
          : ""
          }
          <Link to="/">
          <p className="font-openSans text-xl font-bold text-center   transition transform hover:-translate-y-1">TecnoSapiens </p>
          </Link>
          <div className="flex space-x-4  items-center">
            <a className="hidden md:inline-block transition transform hover:-translate-y-1 p-2" href="#">
              <img className="h-4" src={github} alt="GitHub" />
            </a>
            <a className="hidden md:inline-block transition transform hover:-translate-y-1 p-2" href="#">
              <img className="h-4" src={linkedin} alt="LinkedIn" />
            </a>
            <Sidebar />
          </div>
        </div>
      </nav>
    </>
  )
}

