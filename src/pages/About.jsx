import React from "react";
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-300 text-center px-6 md:px-12 ">
    <h1 className="text-4xl font-bold mb-6 sm:mt-6">About Me</h1>
  
    <div className="max-w-xl sm:max-w-5xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
        <p className="text-lg sm:text-xl text-gray-700 ">
          I'm Abdalla Mohamed, a Developer and Designer with Egyptian roots, currently based in Toronto, Canada. 
          I have a passion for technology and innovation, which drives me to explore new opportunities and tackle exciting challenges. 
          I graduated from Ontario Tech University majoring in Game Development and Entrepreneurship. 
        </p>
      </div>
  
      <div className="mb-6 sm:mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Currently Working On</h2>
        <p className="text-lg sm:text-xl text-gray-700 ">
          Currently, I'm working on improving my skills in game development, design, and full-stack web development. 
          I am focused on mastering tools and frameworks like Unity, Unreal, Three.js, React, and Node.js to build innovative and user-friendly solutions.
          Additonally, working on responsive websites for companies in need.
        </p>
      </div>
  
      <div className="mb-6 sm:mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Interests</h2>
        <p className="text-lg sm:text-xl text-gray-700 ">
          In my free time, I enjoy exploring new technologies, reading books to expand my knowledge, and watching shows, and movies. 
          I’m also a huge fan of gaming, and love exploring new games as well as developing my own.
        </p>
      </div>
  
      </div>

      <div className="mt-5 text-center">
          <p className="mb-[10px] text-xl">Connect with me on LinkedIn: <a className="inline-block text-[#0077b5] hover:text-[#005582] transition-colors duration-300 ease-in-out" href="https://www.linkedin.com/in/ibeabdulla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="-mb-2"/>
          </a></p>
          
        </div>
    </section>
  );
};

export default About;
