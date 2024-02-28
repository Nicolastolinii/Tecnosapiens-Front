import { Sidebar } from "./Sidebar"
import SearchIcon from "../../../assets/lupa.webp"
import github from "../../../assets/github.webp"
import linkedin from "../../../assets/linkedin.webp"
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
          <p className="font-poppins font-bold text-xl  text-center   transition transform hover:-translate-y-1">TecnoSapiens </p>
          </Link>
          <div className="flex space-x-4  items-center">
            <Link className="hidden md:inline-block transition transform hover:-translate-y-1 p-2" href="https://github.com/Nicolastolinii">
              <img className="h-4" src={github} alt="GitHub" />
            </Link>
            <Link className="hidden md:inline-block transition transform hover:-translate-y-1 p-2" href="https://www.linkedin.com/in/nicolastolini/">
              <img className="h-4" src={linkedin} alt="LinkedIn" />
            </Link>
            <Sidebar />
          </div>
        </div>
      </nav>
    </>
  )
}

