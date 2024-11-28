import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-300 text-center px-6 md:px-12">
      <img
        src="src/assets/Abdu.jpg"
        alt="Abdalla Mohamed"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 sm:mb-6 shadow-lg"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Hi, I'm Abdalla Mohamed</h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl sm:max-w-5xl">
      I am an Egyptian Developer and Designer located in Toronto, Canada, with a lifelong passion for technology driving me to explore the industry.

Graduating from Ontario Tech University, I specialized in Game Development and Entrepreneurship, and have been working on multiple diverse projects over the course of nearly half a decade. I've gained experience working at Gaggle Studios as a Unity Game Developer creating innovative solutions in Unity for Multiplayer and Gameplay functionality. 

I thrive on tackling complex challenges and delivering impactful results, with my skills including proficiency with programming languages such as JavaScript, React, TailwindCSS, C++, C#, as well as Python. I am always eager to learn more; additionally, I've worked within the Unity Game Engine, and have developed my knowledge of both game and level design. I am also familiar with project management tools like Jira and Trello, and community collaboration tools. 

I am committed to constantly expanding upon my skillset and my knowledge through my work on my projects, and I look forward to future opportunities to continue doing so.

      </p>
    </section>
  );
};

export default Home;
