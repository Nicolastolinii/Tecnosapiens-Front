
import { NavBar } from "../components/main/navbar/NavBar"
import { Conditions } from "../components/terminos&condiciones/Conditions"


export const TermConditions = () => {
    return (
        <div className="bg-[#F9F9FE]">
        <NavBar  input={false}/>
        <Conditions/>
        </div>
        
    )
}
