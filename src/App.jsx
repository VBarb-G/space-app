import Navbar from "./components/navbar/navbar.jsx";
import './App.css'
import Apod from "./components/apod/Apod.jsx";
import {Routes, Route} from "react-router-dom";
import Astros from "./components/astros/astros.jsx";
import About from "./components/about/about.jsx";

function App() {
  const links = [
    {id: 1, href: "/about", text:"Home" },
    {id: 2, href:"/astros", text:"Astros"},
    {id: 3, href:"/apod", text:"APOD"},

  ];

  return (
  <>
  <Navbar links= {links}/>
  <Routes>
    <Route path= "/" element={<h1>Space-app</h1>} />
    <Route path= "/astros" element={<Astros />} />
    <Route path="/Apod" element={<Apod/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
    </>
  );
}


export default App;
