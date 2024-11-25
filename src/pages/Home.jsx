import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-300 text-center px-6">
      <img
        src="/src/assets/Abdu.jpg"
        alt="Abdalla Mohamed"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Abdalla Mohamed</h1>
      <p className="text-2xl text-gray-700 leading-relaxed max-w-5xl">
        I am a passionate Developer and Designer with Egyptian roots, based in Toronto, Canada. 
        My lifelong love for technology has driven me to explore and excel in the tech industry. 
        I graduated from Ontario Tech University, specializing in Game Development and Entrepreneurship. 
        I have worked on diverse projects and gained invaluable experience as Unity Game Developer Intern at Gaggle Studios, 
        where I created innovative solutions in Unity. I thrive on tackling complex challenges and delivering impactful results, 
        and I am eager to bring my skills to any team.
      </p>
    </section>
  );
};

export default Home;
