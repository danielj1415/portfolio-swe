
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutMePage from "./AboutMePage.jsx";
import PlantProject from "./PlantProject.jsx";

function App() {

  return (
    <div>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutMePage/>}></Route>
            <Route path="/plant" element={<PlantProject/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
