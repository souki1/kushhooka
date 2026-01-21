
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import Hero from "../Layout/Hero"
import Menu from "../Layout/Menu"
import Gallery from "../Layout/Gallery"
import About from "../Layout/About"
import Reviews from "../Layout/Reviews"
function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Reviews />
        <Footer />
    </>

  )
}
export default Home