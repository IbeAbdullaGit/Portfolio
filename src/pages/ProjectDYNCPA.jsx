import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import dyncpasGif from '../assets/DYNCPAS.gif';

const ProjectDYNCPA = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-[#FBFAEE] bg-gradient-to-br from-[#000000] via-[#53118F] to-[#242424] relative">
        <div className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-[#FBFAEE]/90">Dynamic CPA Website</h1>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-[#FBFAEE]/75 max-w-3xl mx-auto leading-relaxed">
              A professional marketing website for a Toronto-based CPA firm, featuring service pages, a consultation booking system, and automated calendar integration.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://www.dyncpas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#933DC9]/30 text-[#FBFAEE]/80 uppercase font-bold tracking-wider rounded-lg border border-[#933DC9]/50 hover:bg-[#933DC9]/50 transition-all duration-300"
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
            {/* GIF Preview */}
            <div className="w-full max-w-3xl mx-auto mb-12">
              <img
                src={dyncpasGif}
                alt="DYNCPAS website preview"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            {/* Content Section */}
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Overview</h3>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  Dynamic CPA Website is a multi-page React SPA built for a Toronto-based accounting firm offering tax and financial services. The site serves as the firm's primary public-facing presence, covering services such as bookkeeping, corporate and personal taxes, payroll, business registration, GST/HST filing, and WSIB.
                </p>
                <p className="text-[#242424]/85 text-lg mb-4 leading-relaxed">
                  The highlight of the project is a full consultation booking system embedded in the contact page. Clients can view available weekday time slots, book a one-hour session, and receive a confirmation — all without leaving the site. On the backend, bookings trigger an AWS Lambda function that creates an event in Zoho Calendar, and form submissions are routed through Web3Forms for email delivery.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Key Features</h3>
                <ul className="list-disc list-inside text-[#242424]/85 text-lg leading-relaxed space-y-2">
                  <li>Consultation booking system with live weekday time-slot scheduling</li>
                  <li>AWS Lambda + Zoho Calendar integration for automated calendar events</li>
                  <li>Web3Forms integration for serverless email delivery on form submissions</li>
                  <li>Seven dedicated service detail pages (bookkeeping, taxes, payroll, and more)</li>
                  <li>Deployed and hosted via AWS Amplify Gen 2</li>
                  <li>SEO optimization with JSON-LD AccountingService schema, Open Graph tags, and canonical URLs</li>
                </ul>
              </div>
              
              {/* Tools Used */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Tools Used</h3>
                <div className="flex flex-wrap">
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">React 19</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">React Router</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Vite</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Radix UI</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">AWS Amplify</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">AWS Lambda</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Web3Forms</span>
                  <span className="px-4 py-2 bg-[#933DC9]/10 text-[#53118F] border border-[#933DC9]/30 rounded-lg m-1 font-semibold">Lucide React</span>
                </div>
              </div>

              {/* Project Links */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#242424]">Project Links</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.dyncpas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-[#53118F] uppercase font-bold tracking-wider rounded-lg shadow-lg border-2 border-[#933DC9] hover:bg-[#933DC9]/10 transition-all duration-300 inline-block hover:transform hover:-translate-y-1"
                  >
                    View Live Site
                  </a>
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

export default ProjectDYNCPA;
