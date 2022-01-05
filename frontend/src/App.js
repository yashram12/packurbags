import Navbarcomp from "./components/Navbar";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import About from './components/About'
import Tours from './components/Tours'
import Places from './components/Places'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbarcomp />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/places" element={<Places />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
