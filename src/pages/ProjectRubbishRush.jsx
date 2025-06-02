import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ProjectRubbishRush = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Rubbish Rush</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A fast-paced game where you clear piles of rubbish by dragging them into the trash before time runs out.
            </p>
          </div>
          <div className="mt-10">
            <a 
              href="https://thevoidangel.itch.io/rubbish-rush" 
              className="px-8 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-xl hover:bg-[#933DC9]/80 hover:transform hover:-translate-y-1 transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
      
      {/* Project Details Section */}
      <section className="py-20 bg-[#FBFAEE]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            {/* Video Section */}
            <div className="w-full mb-12">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/VvpUrpdVSUE?si=eX-zqDzd4eAxY5c2"
                  title="Video for Rubbish Rush"
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Overview</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  Rubbish Rush is a fast-paced game where players race against the clock to clear piles of rubbish by dragging them into the trash. The game tests players' speed and reflexes as they try to clean up various environments before time runs out.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed mb-4">
                  I was responsible for designing the game, developing the core gameplay mechanics, creating levels with increasing difficulty, and implementing custom effects triggered by specific environments to enhance the player experience.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  The project was developed using a custom engine built with OpenGL and C++, allowing for precise control over the game's systems and visual elements.
                </p>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Tools Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">OpenGL</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">C++</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Custom Engine</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Game Design</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Level Design</span>
                </div>
              </div>
              
              {/* Project Links */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">See Live</h3>
                <a
                  href="https://thevoidangel.itch.io/rubbish-rush"
                  className="px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-all duration-300 inline-block mr-4 hover:transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on itch.io
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

export default ProjectRubbishRush; 