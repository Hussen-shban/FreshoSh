import { useRef, useEffect } from "react"
import Cart from "./components/Cart"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import MenuItem from "./components/MenuItem"
import Nav from "./components/Nav"
import OfferDetails from "./components/OfferDetails"
import SpecialOffer from "./components/SpecialOffer"
import Upernav from "./components/Upernav"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function Home() {
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const offerRef = useRef(null)
  const contactref =useRef(null)
  const location = useLocation()

  const scrollToSection = (ref, offset = -50) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (location.state?.scrollTo) {
      switch (location.state.scrollTo) {
        case "hero":
          scrollToSection(heroRef, -300)
          break
        case "menu":
          scrollToSection(menuRef)
          break
        case "offer":
          scrollToSection(offerRef)
          break
          case "contact":
            scrollToSection(contactref ,-100)
        default:
          break
      }
    }
  }, [location.state])

  return (
    <main>
      <Upernav />
      <Nav

      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={offerRef}>
        <SpecialOffer />
      </div>
      <div ref={contactref}>
        <Contact />
      </div>
      <Footer/>
    </main>
  )
}

function App() {
  return (
    <Router basename="/FreshoSh">
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/SpecialOffer"
          element={
            <>
              <Nav />
              <OfferDetails />
            </>
          }
        />
        <Route
          path="/item/:id"
          element={
            <>
              <Nav />
              <MenuItem />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Nav />
              <Cart />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
