
import { Footer } from "./Footer"
import { CardBig } from "./components/main/CardBig"
import { CardSmall } from "./components/main/CardSmall"
import CarouselBlog from "./components/main/CarouselBlog"
import { NavBar } from "./components/main/navbar/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <h1 className="container mx-auto text-center items-center font-bold text-[40px] py-10">Trending</h1>
      <CarouselBlog />
      <CardBig />
      <CardSmall />
      <Footer />
    </>
  )
}

export default App
