import Navbarcomp from "./components/Navbar";
import './app.css'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import About from './components/About'
import Tours from './components/Tours'
import Places from './components/Places'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import Place from "./components/places/Place"
import Tour from "./components/tours/Tour"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbarcomp />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:tid" element={<Tour />} />
            <Route path="/places" element={<Places />} />
            <Route path="/place/:pid" element={<Place />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
