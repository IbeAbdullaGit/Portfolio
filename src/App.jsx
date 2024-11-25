import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects} from "./pages";
import { Navbar } from "./Components/Navbar";


const App = () => {
  return(
    <section className="bg-slate-300">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App