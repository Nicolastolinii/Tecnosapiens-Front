
import { CreatePost } from "../components/createPost/CreatePost"
import { NavBar } from "../components/main/navbar/NavBar"
import { Footer } from "../Footer"

export const PostCreator = () => {
  return (
    <div className="flex flex-col pt-32 min-h-screen">
      <NavBar />
      <CreatePost />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}
