import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects, ProjectNexusESC, ProjectSpinCritters,ProjectRubbishRush, ProjectTheBeyond, ProjectXelify} from "./pages";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return(
    <section className="bg-slate-300">
      <Router>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio/" element={<Home/>}/>
          <Route path="/Portfolio/about" element={<About/>}/>
          <Route path="/Portfolio/projects" element={<Projects/>}/>
          <Route path="/Portfolio/contact" element={<Contact/>}/>
          <Route path="/Portfolio/project/nexus-esc" element={<ProjectNexusESC/>}/>
          <Route path="/Portfolio/project/spin-critters" element={<ProjectSpinCritters/>}/>
          <Route path="/Portfolio/project/rubbish-rush" element={<ProjectRubbishRush/>}/>
          <Route path="/Portfolio/project/the-beyond" element={<ProjectTheBeyond/>}/>
          <Route path="/Portfolio/project/Xelify" element={<ProjectXelify/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
