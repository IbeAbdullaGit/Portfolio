import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ProjectRAFrontend = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#933DC9] mb-4 font-semibold">Side Project</p>
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">RA Frontend</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A desktop app that pulls live data from the RetroAchievements API and transforms it into a fully custom, interactive social showcase.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://github.com/IbeAbdullaGit/RAFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-xl hover:bg-[#933DC9]/80 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-[#FBFAEE]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">

            {/* Data Flow Diagram */}
            <div className="w-full max-w-3xl mx-auto mb-16">
              <div className="bg-[#242424] rounded-xl p-8 text-[#FBFAEE]/80 font-mono text-sm md:text-base">
                <p className="text-[#933DC9] font-bold uppercase tracking-widest text-xs mb-6">Data Flow</p>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full max-w-sm bg-[#933DC9]/20 border border-[#933DC9]/40 rounded-lg px-5 py-3 text-center">
                    <span className="text-[#FBFAEE]/90 font-semibold">RetroAchievements API</span>
                    <p className="text-[#FBFAEE]/45 text-xs mt-1">Third-party REST API</p>
                  </div>
                  <span className="text-[#933DC9] text-xl">↓</span>
                  <div className="w-full max-w-sm bg-[#933DC9]/20 border border-[#933DC9]/40 rounded-lg px-5 py-3 text-center">
                    <span className="text-[#FBFAEE]/90 font-semibold">Express + PostgreSQL Backend</span>
                    <p className="text-[#FBFAEE]/45 text-xs mt-1">Proxy, rate-limiting, social data storage</p>
                  </div>
                  <span className="text-[#933DC9] text-xl">↓</span>
                  <div className="w-full max-w-sm bg-[#933DC9]/20 border border-[#933DC9]/40 rounded-lg px-5 py-3 text-center">
                    <span className="text-[#FBFAEE]/90 font-semibold">React + Zustand Frontend</span>
                    <p className="text-[#FBFAEE]/45 text-xs mt-1">Client-side caching, showcase rendering</p>
                  </div>
                  <span className="text-[#933DC9] text-xl">↓</span>
                  <div className="w-full max-w-sm bg-[#933DC9]/20 border border-[#933DC9]/40 rounded-lg px-5 py-3 text-center">
                    <span className="text-[#FBFAEE]/90 font-semibold">Electron Desktop Window</span>
                    <p className="text-[#FBFAEE]/45 text-xs mt-1">Cross-platform packaged app</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto">

              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Overview</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  RA Frontend is a personal side project built around a simple idea: take raw data from the <a href="https://retroachievements.org" target="_blank" rel="noopener noreferrer" className="text-[#53118F] underline hover:text-[#933DC9] transition-colors">RetroAchievements</a> API and present it in a way that the official site never does. RetroAchievements is a platform that adds achievement systems to classic retro games — the API exposes everything from completion stats to rarity percentages, but the stock profile page is minimal.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  This app packages that data into a fully custom Electron desktop experience: a draggable showcase grid where you curate which achievements to highlight, a rarity browser, console-filtered galleries, social challenges between friends, leaderboards, and an Achievement of the Week events tab — all driven by live API responses with a local caching layer to keep things snappy.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  The project was also an exercise in building a proper full-stack architecture for a side project: a dedicated Express + PostgreSQL backend handles the RA API proxy (keeping credentials off the client), stores social graph data, and serves a clean REST API to the React frontend.
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Live achievement data fetched from the RetroAchievements REST API and normalized for display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Custom showcase grid — curate Recent, Proud, Rarest, and Console-specific achievement panels, draggable and reorderable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Client-side caching layer (profile ~10 min, achievement metadata via singleton service) to reduce redundant API calls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Social system: friend requests, mutual-follow sync, challenge a friend to earn up to 3 achievements, and a leaderboard with friends + global top 10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Achievement of the Week events tab pulling community event data from the RA API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Packaged as a cross-platform Electron app with a local Express + PostgreSQL backend running alongside it</span>
                  </li>
                </ul>
              </div>

              {/* The Data Story */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">From API to Interface</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The core engineering challenge was taking loosely structured API responses — achievements buried inside game objects, timestamps in varying formats, rarity percentages as floats — and normalizing them into a consistent shape the UI components can consume. A custom aggregation step in <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">raApi.ts</code> flattens recent achievements out of the <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">recentlyPlayed</code> array, enriches each entry with its console name, sorts by unlock date, and pushes the result into Zustand's <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">profileStore</code>.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The backend acts as a single gated proxy: all RA API calls go through <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">/api/ra/*</code> routes, so API credentials never leave the server. PostgreSQL stores everything that the RA API doesn't track — friend relationships, proud achievement picks, and challenge history — bridging the gap between the external data source and the social layer built on top of it.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  Showcase layout preferences are persisted back to the backend so your configuration survives app restarts, with a localStorage fallback so the UI never blocks on a slow backend response.
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Challenges Faced</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  Coordinating data from two sources — live RA API responses and persisted backend state — without causing race conditions or stale renders was the trickiest part. The initial load sequence in the Dashboard has to fetch user credentials, ping the RA proxy, resolve console IDs, load showcase settings, and hydrate the proud achievements list in a specific order, all while keeping the UI responsive.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  Getting Electron's Content Security Policy to permit connections to the local Express server, the RA domain, and its media CDN — without disabling CSP entirely — also required careful configuration of the <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">connect-src</code> and <code className="bg-[#933DC9]/10 text-[#53118F] px-2 py-0.5 rounded font-mono text-base">img-src</code> directives in the main process.
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Technologies Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">React 19</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">TypeScript</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Electron</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Vite</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Zustand</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Express 5</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">PostgreSQL</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">RetroAchievements API</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Radix UI</span>
                </div>
              </div>

              {/* Project Links */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">View Project</h3>
                <a
                  href="https://github.com/IbeAbdullaGit/RAFrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-all duration-300 inline-block hover:transform hover:-translate-y-1"
                >
                  View on GitHub
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#FBFAEE] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-10 md:space-x-12">
            <div className="mb-8 md:mb-0">
              <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-[#FBFAEE]/90">Abdalla Mohamed</h4>
              <p className="text-[#FBFAEE]/65 mb-6 max-w-md">
                I thrive on tackling complex challenges and delivering impactful results, with my skills including proficiency with programming languages such as JavaScript, React, TailwindCSS, C++, C#, as well as Python.
              </p>
            </div>
            <div className="md:order-2">
              <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-[#FBFAEE]/90">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ibeabdulla/" target="_blank" rel="noopener noreferrer" className="text-[#FBFAEE]/75 hover:text-[#933DC9] transition-colors duration-300">
                  <FaLinkedin size={30} className="inline-block" />
                </a>
                <a href="https://github.com/IbeAbdullaGit" target="_blank" rel="noopener noreferrer" className="text-[#FBFAEE]/75 hover:text-[#933DC9] transition-colors duration-300">
                  <FaGithub size={30} className="inline-block" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#242424] text-center text-sm text-[#FBFAEE]/60">
            <p>© {new Date().getFullYear()} Abdalla Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjectRAFrontend;
