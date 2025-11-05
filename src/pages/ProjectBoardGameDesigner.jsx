import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import bgdImage1 from '../assets/BoardGameDesigner -1.png';
import bgdGif2 from '../assets/BoardGameDesigner-2.gif';
import bgdGif3 from '../assets/BoardGameDesigner-3.gif';

const ProjectBoardGameDesigner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Board Game Designer</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A comprehensive board game design platform combining project management features with visual prototyping tools for creating board games.
            </p>
          </div>
          <div className="mt-10">
            <span className="px-6 py-2 bg-[#933DC9]/30 text-[#FBFAEE]/80 uppercase font-bold tracking-wider rounded-lg border border-[#933DC9]/50">
              Work in Progress
            </span>
          </div>
        </div>
      </section>
      
      {/* Project Details Section */}
      <section className="py-20 bg-[#FBFAEE]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            {/* Media Section */}
            <div className="w-full mb-12">
              <div className="flex flex-col items-center">
                {/* Main GIF with tagline */}
                <div className="w-full max-w-3xl mb-3">
                  <img 
                    src={bgdGif3}
                    alt="Board Game Designer visual mockup"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <p className="text-sm text-[#242424]/70 mb-8">Visual mockup</p>
                {/* Additional media */}
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="w-full md:w-5/12">
                    <img 
                      src={bgdGif2}
                      alt="Board Game Designer interaction demo"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <img 
                      src={bgdImage1}
                      alt="Board Game Designer UI screenshot"
                      className="w-full rounded-lg shadow-lg"
                    />
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
                  Board Game Designer is a full-stack web application that combines project management features inspired by Codecks with visual prototyping tools inspired by Iterary. This platform allows board game designers to manage their game development process while visually designing and prototyping their games.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  This project is currently a work in progress; core workflows and the visual designer are under active development and iterating frequently.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The project management side features card-based task management with Kanban boards, timeline views, and team collaboration tools. The visual designer provides a drag-and-drop interface for placing game components like cards, dice, tokens, decks, and boards, with real-time testing capabilities.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  This project was developed entirely by me using Next.js 14, TypeScript, React, and ShadCN UI components. The application includes a modern, responsive design with dark/light mode support and smooth animations.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Key Features</h3>
                <ul className="list-disc list-inside text-[#242424]/85 text-lg leading-relaxed space-y-2">
                  <li>Card-based task management with Kanban boards and timeline views</li>
                  <li>Visual game designer with drag-and-drop component placement</li>
                  <li>Component library including playing cards, dice, tokens, and decks</li>
                  <li>Real-time playtesting mode for interactive game testing</li>
                  <li>Project collaboration features with team management</li>
                  <li>Database integration with Prisma and SQLite</li>
                  <li>Responsive design with dark/light mode support</li>
                </ul>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Tools Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Next.js</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">TypeScript</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">React</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">ShadCN UI</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Prisma</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Framer Motion</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Project Management</span>
                </div>
              </div>

              {/* Project Links */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Links</h3>
                <a
                  href="https://github.com/IbeAbdullaGit/BoardGame-Designer"
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
            <div className="md:w-1/2 order-2 md:order-1 mb-10 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-[#FBFAEE]/90">Abdalla Mohamed</h4>
              <p className="text-[#FBFAEE]/65 mb-6 max-w-md">
                I thrive on tackling complex challenges and delivering impactful results, with my skills including proficiency with programming languages such as JavaScript, React, TailwindCSS, C++, C#, as well as Python.
              </p>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-[#FBFAEE]/90">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ibeabdulla/" target="_blank" rel="noopener noreferrer" className="text-[#FBFAEE]/75 hover:text-[#933DC9] transition-colors duration-300">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/IbeAbdullaGit" target="_blank" rel="noopener noreferrer" className="text-[#FBFAEE]/75 hover:text-[#933DC9] transition-colors duration-300">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#242424] text-center text-sm text-[#FBFAEE]/60">
            <p>&copy; {new Date().getFullYear()} Abdalla Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjectBoardGameDesigner;
