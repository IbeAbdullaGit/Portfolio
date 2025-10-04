import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ProjectXelify = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Xelify</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              An Autopayroll Time Card Processor - A comprehensive payroll automation system that streamlines time card processing for multiple companies.
            </p>
          </div>
          <div className="mt-10">
            <a 
              href="https://github.com/IbeAbdullaGit/Auto-Payroll" 
              className="px-8 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-xl hover:bg-[#933DC9]/80 hover:transform hover:-translate-y-1 transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
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
            {/* Video Section - Placeholder for future video */}
            <div className="w-full mb-12">
              <div className="aspect-video w-full bg-gradient-to-br from-[#933DC9]/20 to-[#53118F]/20 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#933DC9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FBFAEE]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                  <p className="text-[#242424]/60 text-lg font-semibold">Demo</p>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Overview</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  Xelify is a comprehensive payroll automation system designed to streamline time card processing for multiple companies. The application addresses the common challenge of manually processing time cards by automating the conversion from PDF format to Excel spreadsheets.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The system features intelligent break calculations, time rounding, and exception handling to ensure accurate payroll processing. I built a user-friendly GUI interface that supports multi-company configurations with custom rules for each organization, making it adaptable to various business needs.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  This project demonstrates my ability to create practical business automation tools that solve real-world problems, combining technical expertise with user experience design to deliver a professional-grade application.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">PDF to Excel conversion with intelligent data extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Automated break calculations and time rounding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Multi-company support with custom configuration rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">User-friendly GUI interface for easy operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#933DC9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#242424]/85 text-lg">Exception handling for edge cases and data validation</span>
                  </li>
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Challenges Faced</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  Developing Xelify presented unique challenges as it marked my first venture into creating professional-grade automation software independently. The project required extensive research and iterative development, as many initially planned features didn't perform as expected and had to be redesigned or removed entirely.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  One of the most significant hurdles was working with JSON configuration files and building automation workflows from scratch, areas where I had limited prior experience. This necessitated extensive online research to identify the most suitable libraries and approaches for the task at hand.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  The project evolved organically from a command-line application to a full GUI interface as I recognized the need for improved user accessibility and interaction capabilities.
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Learning Outcomes</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  This project significantly enhanced my understanding of Python programming and its extensive ecosystem of libraries. I gained hands-on experience with automation frameworks and learned to leverage Python's capabilities for complex data processing tasks.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The development process taught me valuable lessons in iterative design, where initial concepts had to be refined based on practical testing and user needs. I developed stronger problem-solving skills and learned to adapt technical approaches when initial solutions proved inadequate.
                </p>
                <p className="text-[#242424]/85 text-lg leading-relaxed">
                  Most importantly, I gained confidence in building standalone applications that solve real-world business problems, establishing a foundation for future automation and productivity tool development.
                </p>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Technologies Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Python</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">PDF Processing</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Excel Automation</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">GUI Development</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Data Processing</span>
                </div>
              </div>
              
              {/* Project Links */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">View Project</h3>
                <a
                  href="https://github.com/IbeAbdullaGit/Auto-Payroll"
                  className="px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-all duration-300 inline-block mr-4 hover:transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
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

export default ProjectXelify;
