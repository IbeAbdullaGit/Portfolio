import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import spinCrittersGif from '../assets/SpinCritters.gif';
import spinCritters1 from '../assets/SpinCritters-1.png';
import spinCritters2 from '../assets/SpinCritters-2.png';

const ProjectSpinCritters = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Spin Critters</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A multiplayer mobile game featuring matchmaking system and unit-selection combat logic determined by a slot machine mechanic.
            </p>
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
                {/* Main GIF */}
                <div className="w-full max-w-3xl mb-8">
                  <img 
                    src={spinCrittersGif} 
                    alt="Spin Critters Gameplay" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Screenshots */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="w-full md:w-5/12">
                    <img 
                      src={spinCritters1} 
                      alt="Spin Critters Screenshot 1" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <img 
                      src={spinCritters2} 
                      alt="Spin Critters Screenshot 2" 
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
                  During my time at Gaggle, I contributed to the development of multiplayer functionality, specifically working on the matchmaking system that allows up to 8 players to join the same lobby, as well as matching them before each battle.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed mb-4">
                  Additionally, I was responsible for programming the unit selection and combat logic. A slot-machine determined the units that will fight in the upcoming battle, and the logic ensured that the game could logically determine the winner based on the units' abilities and attributes.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  The project was developed in Unity, focusing on creating an engaging mobile gaming experience with multiplayer capabilities and strategic gameplay elements.
                </p>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Tools Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Unity</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">C#</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Multiplayer</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Gameplay Systems</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Matchmaking</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Combat Logic</span>
                </div>
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

export default ProjectSpinCritters;