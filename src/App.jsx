import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, ProjectNexusESC, ProjectSpinCritters,ProjectRubbishRush, ProjectTheBeyond, ProjectXelify, ProjectBoardGameDesigner, ProjectWavesTD} from "./pages";
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
          <Route path="/Portfolio/project/nexus-esc" element={<ProjectNexusESC/>}/>
          <Route path="/Portfolio/project/spin-critters" element={<ProjectSpinCritters/>}/>
          <Route path="/Portfolio/project/rubbish-rush" element={<ProjectRubbishRush/>}/>
          <Route path="/Portfolio/project/the-beyond" element={<ProjectTheBeyond/>}/>
          <Route path="/Portfolio/project/Xelify" element={<ProjectXelify/>}/>
          <Route path="/Portfolio/project/boardgame-designer" element={<ProjectBoardGameDesigner/>}/>
          <Route path="/Portfolio/project/waves-td" element={<ProjectWavesTD/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
