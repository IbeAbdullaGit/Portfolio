import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import wavesGif1 from '../assets/WavesTD -1.gif';

const ProjectWavesTD = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">WavesTD</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A roguelite featuring customizable boats, modular parts, and weapon systems with projectile combat.
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
                <div className="w-full max-w-3xl mb-8">
                  <img 
                    src={wavesGif1}
                    alt="WavesTD gameplay snippet"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Overview</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  WavesTD is a roguelite developed in Unity. Players pilot boats that are customizable through escalating encounters, upgrading and swapping parts as they progress. This project was a collaborative effort, and I was primarily responsible for implementing core gameplay systems.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  This project is currently a work in progress; systems are actively iterated for balance and feel.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  My contributions include the modular boat parts system (e.g., plating for protection, hull and engine for speed, utility parts for healing/support, and weapon slots), the weapon framework with firing patterns and accuracy, and the projectile stack for spawning, lifetime, and collisions.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  I also implemented boat movement with angular drag for responsive turning/handling, plus ScriptableObject data for weapons and parts to enable fast iteration and balance without code changes.
                </p>
              </div>
              
              {/* My Contributions */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">My Contributions</h3>
                <ul className="list-disc list-inside text-[#242424]/85 text-lg leading-relaxed space-y-2">
                  <li><strong>Boat Parts System:</strong> Modular ScriptableObject-driven parts, including plating (protection), utilities (healing/support), speed-focused hull/engine, and weapon slots</li>
                  <li><strong>Weapon System:</strong> Firing patterns, accuracy/spread, burst options, projectile management, and reticle feedback</li>
                  <li><strong>Boat Movement:</strong> Angular drag and movement tuning for responsive, readable controls</li>
                  <li><strong>Projectile System:</strong> Lifetime, damage, collision layers, effects, and object pooling</li>
                  <li><strong>Data-Driven Design:</strong> ScriptableObjects for weapons and parts to support rapid iteration and data-driven design with database integration in the future.</li>
                </ul>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Tools Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Unity</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">C#</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">ScriptableObjects</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Game Systems</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Physics</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Object Pooling</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Data-Driven Design</span>
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

export default ProjectWavesTD;
