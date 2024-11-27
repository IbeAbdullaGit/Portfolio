import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-300 text-center px-6 md:px-12">
      <img
        src="/src/assets/Abdu.jpg"
        alt="Abdalla Mohamed"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 sm:mb-6 shadow-lg"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Hi, I'm Abdalla Mohamed</h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl sm:max-w-5xl">
        I am a passionate Developer and Designer with Egyptian roots, based in Toronto, Canada. 
        My lifelong love for technology has driven me to explore and excel in the tech industry. 
        I graduated from Ontario Tech University, specializing in Game Development and Entrepreneurship. 
        I have worked on diverse projects and gained invaluable experience as Unity Game Developer Intern at Gaggle Studios, 
        where I created innovative solutions in Unity. thrive on tackling complex challenges and delivering impactful results.
         My skills include proficiency in programming languages such as JavaScript, React, TailwindCSS, C++, C#, and Python, and I am always eager to learn more.
          Additionally, I have hands-on experience with Unity, as well as level design and game design expertise. 
          I am also familiar with project management tools like Jira and Trello, and community collaboration tools. 
          I am committed to continuously improving and applying my skills to contribute to successful projects.
      </p>
    </section>
  );
};

export default Home;
