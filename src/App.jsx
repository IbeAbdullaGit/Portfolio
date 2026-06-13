import React, { Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home, ProjectNexusESC, ProjectSpinCritters, ProjectRubbishRush, ProjectTheBeyond, ProjectXelify, ProjectDYNCPA, ProjectWavesTD, ProjectRAFrontend } from "./pages"
import { Navbar } from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

const Portfolio3D = React.lazy(() => import("./pages/Portfolio3D"))

const App = () => {
  return (
    <section className="bg-slate-300">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/nexus-esc" element={<ProjectNexusESC />} />
          <Route path="/project/spin-critters" element={<ProjectSpinCritters />} />
          <Route path="/project/rubbish-rush" element={<ProjectRubbishRush />} />
          <Route path="/project/the-beyond" element={<ProjectTheBeyond />} />
          <Route path="/project/Xelify" element={<ProjectXelify />} />
          <Route path="/project/dyncpa" element={<ProjectDYNCPA />} />
          <Route path="/project/waves-td" element={<ProjectWavesTD />} />
          <Route path="/project/ra-frontend" element={<ProjectRAFrontend />} />
          <Route
            path="/3d"
            element={
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
                  Loading...
                </div>
              }>
                <Portfolio3D />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </section>
  )
}

export default App
