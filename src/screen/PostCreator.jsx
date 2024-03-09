
import { CreatePost } from "../components/createPost/CreatePost"
import { NavBar } from "../components/main/navbar/NavBar"

export const PostCreator = () => {
  return (
    <div className="flex h-full flex-col pt-32 bg-[#F9F9FE]">
      <NavBar />
      <CreatePost />
    </div>
  )
}
