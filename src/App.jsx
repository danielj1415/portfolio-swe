
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutMePage from "./AboutMePage.jsx";
import PlantProject from "./PlantProject.jsx";
import SpotifyProject from "./SpotifyProject.jsx";
import ScrollToTop from "./ScrollToTop.js";

function App() {

  return (
    <div>
      <BrowserRouter basename={window.location.pathname || ''}>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutMePage/>}></Route>
            <Route path="/plant" element={<PlantProject/>}></Route>
            <Route path="/spotify" element={<SpotifyProject/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
