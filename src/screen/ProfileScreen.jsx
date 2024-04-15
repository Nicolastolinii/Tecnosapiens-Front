import { NavBar } from "../components/main/navbar/NavBar"
import { Profile } from "../components/profile/Profile"

export const ProfileScreen = () => {
  return (
    <div className="flex flex-col  bg-[#F9F9FE]">
      <NavBar/>
      <Profile/>
    </div>
  )
}
