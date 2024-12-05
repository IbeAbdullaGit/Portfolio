import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects} from "./pages";
import { Navbar } from "./components/Navbar";


const App = () => {
  return(
    <section className="bg-slate-300">
      <Router basename="/Portfolio">
        <Navbar/>
        <Routes>
          <Route path="/Portfolio/" element={<Home/>}/>
          <Route path="/Portfolio/about" element={<About/>}/>
          <Route path="/Portfolio/projects" element={<Projects/>}/>
          <Route path="/Portfolio/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
