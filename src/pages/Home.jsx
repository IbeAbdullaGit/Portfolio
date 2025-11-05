import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './mouseScroll.css';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  // State for contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [inputFocus, setInputFocus] = useState({
    name: false,
    email: false,
    message: false
  });

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1owea1n', 'template_97l6nrg', e.target, 'AZ3S3QuKdIOWJv1gq')
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Board Game Designer',
      description: 'A comprehensive board game design platform that combines project management features inspired by Codecks with visual prototyping tools inspired by Iterary. Built with Next.js 14, TypeScript, React, and ShadCN UI.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'ShadCN UI', 'Prisma', 'Framer Motion', 'Project Management'],
      slug: 'boardgame-designer',
      category: 'Web'
    },
    {
      title: 'WavesTD',
      description: 'A roguelite developed in Unity featuring customizable boats. I implemented modular boat parts (plating/protection, speed, healing utilities, weapon slots), the weapon system, boat movement with angular drag, projectile systems, and ScriptableObject data structures.',
      technologies: ['Unity', 'C#', 'ScriptableObjects', 'Game Systems', 'Physics', 'Object Pooling', 'Data-Driven Design'],
      slug: 'waves-td',
      category: 'Game Dev'
    },
    {
      title: 'Xelify - An Autopayroll Time Card Processor',
      link: 'https://github.com/IbeAbdullaGit/Auto-Payroll',
      description: 'I developed a comprehensive payroll automation system that streamlines time card processing for multiple companies. The application converts PDF time cards into Excel spreadsheets with intelligent break calculations, time rounding, and exception handling. I built a user-friendly GUI interface that supports multi-company configurations with custom rules for each organization.',
      technologies: ['Python', 'PDF Processing', 'Excel Automation', 'GUI Development', 'Data Processing'],
      slug: 'Xelify',
      category: 'App'
    },
    {
      title: 'Spin Critters',
      description: 'During my time at Gaggle, I contributed to a prototype autobattler where players collect and evolve critters. I implemented the combat logic, battle outcome calculations, and multiplayer matchmaking for up to 8 players.',
      technologies: ['Unity', 'C#', 'Multiplayer', 'Gameplay Systems', 'Matchmaking', 'Combat Logic'],
      slug: 'spin-critters',
      category: 'Game Dev'
    },
    {
      title: 'Nexus//ESC',
      link: 'https://carw.itch.io/nexusesccelbreak',
      description: 'I designed and developed puzzles for a cooperative game where one player acts as a hacker, manipulating the environment, while the other player, an infiltrator, stealths through enemies and solves puzzles.',
      technologies: ['Unity', 'C#', 'Level Design', 'Puzzle Design', 'Stealth Mechanics', 'Cooperative Gameplay'],
      slug: 'nexus-esc',
      category: 'Game Dev'
    },
    {
      title: 'Rubbish Rush',
      link: 'https://thevoidangel.itch.io/rubbish-rush',
      description: 'A fast-paced game where you clear piles of rubbish by dragging them into the trash before time runs out. I designed the game, developed the core gameplay, created levels, and implemented custom effects.',
      technologies: ['OpenGL', 'C++', 'Custom Engine', 'Game Design', 'Level Design'],
      slug: 'rubbish-rush',
      category: 'Game Dev'
    },
    {
      title: 'The Beyond',
      link: 'https://thevoidangel.itch.io/the-beyond',
      description: 'A 2D platformer game, where the goal is to reach the highest point and combat obstacles on the way. I implemented the basic controls and the level design for this project.',
      technologies: ['OpenGL', 'C++', 'Custom Engine', 'Platformer', 'Level Design', 'Game Controls'],
      slug: 'the-beyond',
      category: 'Game Dev'
    },
    // Example future projects with different categories
    // {
    //   title: 'E-commerce Website',
    //   description: 'A modern e-commerce platform with payment integration.',
    //   technologies: ['React', 'TailwindCSS', 'Stripe', 'Firebase'],
    //   slug: 'ecommerce-site',
    //   category: 'Web'
    // }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'Game Dev', label: 'Game Dev' },
    { id: 'App', label: 'App' },
    { id: 'Web', label: 'Web' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] justify-center relative">
        <div className="text-center text-[#FBFAEE]/95 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Hey, I'm Abdalla Mohamed</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl text-[#FBFAEE]/75 mx-auto">
            I am a Canadian Developer and Designer, with a lifelong passion for technology driving me to explore the industry.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-[#933DC9] hover:bg-[#933DC9]/80 text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            Projects
          </button>
        </div>
        
        {/* Social links */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 border-2 border-[#242424] hidden md:block rounded-r-lg overflow-hidden backdrop-blur-sm bg-[#000000]/40">
          <div className="w-12 h-12">
            <a href="https://www.linkedin.com/in/ibeabdulla/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center border-b-2 border-[#242424] text-[#FBFAEE]/85 hover:text-[#933DC9] hover:bg-[#FBFAEE]/10 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="w-12 h-12">
            <a href="https://github.com/IbeAbdullaGit" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center text-[#FBFAEE]/85 hover:text-[#933DC9] hover:bg-[#FBFAEE]/10 transition-colors duration-300">
                <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        {/* Mouse scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="mouse-container">
            <div className="mouse">
              <div className="mouse-wheel"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#242424]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 relative inline-block text-[#FBFAEE]/90">
              About Me
              <span className="absolute w-12 h-1 bg-[#933DC9] bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
            </h2>
            <p className="text-[#FBFAEE]/70 text-lg max-w-3xl mx-auto mt-8">
              Passionate about technology and dedicated to creating meaningful digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#FBFAEE]/90">Get to know me!</h3>
              <div>
                <p className="text-[#FBFAEE]/75 text-lg mb-4">
                  Hey! It's <strong className="text-[#FBFAEE]/95">Abdalla Mohamed</strong> and I'm a <strong className="text-[#FBFAEE]/95">Frontend Web Developer and Game Developer</strong> located in Toronto. I've done <strong className="text-[#FBFAEE]/95">remote</strong> projects for agencies, consulted for startups, and collaborated with talented people to create <strong className="text-[#FBFAEE]/95">digital products</strong> for both business and consumer use.
                </p>
                <p className="text-[#FBFAEE]/75 text-lg mb-8">
                  Graduating from Ontario Tech University, I specialized in Game Development and Entrepreneurship, and have been working on multiple diverse projects over the course of nearly half a decade. I've gained experience working at Gaggle Studios as a Unity Game Developer creating innovative solutions in Unity for Multiplayer and Gameplay functionality.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#FBFAEE]/90">My Skills</h3>
              <div className="flex flex-wrap">
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">HTML</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">CSS</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">TypeScript</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">JavaScript</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">React</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Vite</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">GIT</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Unity</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">C#</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">C++</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Python</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Jira</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Game Design</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">Level Design</span>
                <span className="px-4 py-2 bg-[#933DC9]/20 text-[#FBFAEE]/85 border border-[#933DC9]/40 rounded-lg m-1 font-semibold backdrop-blur-sm">SDLC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#FBFAEE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 relative inline-block text-[#242424]">
              Projects
              <span className="absolute w-12 h-1 bg-[#933DC9] bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
            </h2>
            <p className="text-[#242424]/80 text-lg max-w-3xl mx-auto mt-8">
              Check out some of my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setActiveFilter(button.id)}
                className={`px-6 py-3 rounded-lg font-semibold tracking-wider transition-all duration-300 uppercase ${
                  activeFilter === button.id
                    ? 'bg-[#933DC9] text-[#FBFAEE] shadow-lg transform -translate-y-1'
                    : 'bg-white text-[#242424] border-2 border-[#933DC9] hover:bg-[#933DC9]/10 hover:border-[#53118F]'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-[#242424]/20 rounded-xl shadow-xl p-6 hover:shadow-[#933DC9]/20 hover:shadow-2xl hover:border-[#933DC9]/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-fit"
                >
                  <div className="space-y-6">
                    {/* Project Header with Tag */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-[#242424] flex-1 pr-4">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                        project.category === 'Game Dev' 
                          ? 'bg-[#933DC9]/20 text-[#53118F] border border-[#933DC9]/40' 
                          : project.category === 'App'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#242424]/85 text-base leading-relaxed">{project.description}</p>
                    
                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[#242424]">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-full text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Button */}
                    <div className="pt-4">
                      <Link 
                        to={`/Portfolio/project/${project.slug}`} 
                        className="w-full block text-center px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-all duration-300 hover:transform hover:-translate-y-1"
                      >
                        Project Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white border border-[#242424]/20 rounded-xl shadow-xl p-12 max-w-md mx-auto">
                <p className="text-[#242424]/60 text-lg mb-4">No projects found in this category.</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="px-6 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-colors duration-300"
                >
                  View All Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] text-[#FBFAEE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 relative inline-block text-[#FBFAEE]/90">
              Contact
              <span className="absolute w-12 h-1 bg-[#933DC9] bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
            </h2>
            <p className="text-[#FBFAEE]/75 text-lg max-w-3xl mx-auto mt-8">
              Feel free to contact me for any project or collaboration
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form 
              className="bg-[#FBFAEE]/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl" 
              onSubmit={handleSubmit}
            >
              <div className="mb-6 relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setInputFocus({...inputFocus, name: true})}
                  onBlur={() => setInputFocus({...inputFocus, name: false})}
                  className={`w-full px-4 py-3 bg-transparent border border-[#242424]/30 rounded-lg text-[#242424] font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#933DC9] focus:border-[#933DC9] transition-all ${formData.name ? 'border-[#933DC9]' : ''}`}
                  required
                />
                <label 
                  htmlFor="name" 
                  className={`absolute text-sm font-medium transition-all duration-300 ${
                    formData.name || inputFocus.name 
                      ? 'top-0 left-2 transform -translate-y-1/2 bg-[#FBFAEE] px-1 text-[#933DC9]' 
                      : 'top-3 left-4 text-[#242424]/70'
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
              </div>
              
              <div className="mb-6 relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setInputFocus({...inputFocus, email: true})}
                  onBlur={() => setInputFocus({...inputFocus, email: false})}
                  className={`w-full px-4 py-3 bg-transparent border border-[#242424]/30 rounded-lg text-[#242424] font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#933DC9] focus:border-[#933DC9] transition-all ${formData.email ? 'border-[#933DC9]' : ''}`}
                  required
                />
                <label 
                  htmlFor="email" 
                  className={`absolute text-sm font-medium transition-all duration-300 ${
                    formData.email || inputFocus.email 
                      ? 'top-0 left-2 transform -translate-y-1/2 bg-[#FBFAEE] px-1 text-[#933DC9]' 
                      : 'top-3 left-4 text-[#242424]/70'
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
              </div>
              
              <div className="mb-6 relative">
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setInputFocus({...inputFocus, message: true})}
                  onBlur={() => setInputFocus({...inputFocus, message: false})}
                  rows="6"
                  className={`w-full px-4 py-3 bg-transparent border border-[#242424]/30 rounded-lg text-[#242424] font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#933DC9] focus:border-[#933DC9] transition-all resize-none ${formData.message ? 'border-[#933DC9]' : ''}`}
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute text-sm font-medium transition-all duration-300 ${
                    formData.message || inputFocus.message 
                      ? 'top-0 left-2 transform -translate-y-1/2 bg-[#FBFAEE] px-1 text-[#933DC9]' 
                      : 'top-3 left-4 text-[#242424]/70'
                  }`}
                >
                  Message <span className="text-red-500">*</span>
                </label>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-[#933DC9] text-[#FBFAEE] uppercase font-bold tracking-wider rounded-lg shadow-lg hover:bg-[#53118F] transition-colors duration-300 w-full md:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-5 text-center">
              <p className="mb-2 text-xl text-[#FBFAEE]/80">Connect with me on LinkedIn: 
                <a className="inline-block ml-2 text-[#FBFAEE]/85 hover:text-[#933DC9] transition-colors duration-300" 
                   href="https://www.linkedin.com/in/ibeabdulla/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <FaLinkedin size={30} className="inline-block" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#FBFAEE] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
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
            
            <div className="md:order-1">
              <h4 className="text-xl font-bold mb-4 text-[#FBFAEE]/90">Abdalla Mohamed</h4>
              <p className="text-[#FBFAEE]/65 mb-6 max-w-md">
                I thrive on tackling complex challenges and delivering impactful results, with my skills including proficiency with programming languages such as JavaScript, React, TailwindCSS, C++, C#, as well as Python.
              </p>
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

export default Home;
