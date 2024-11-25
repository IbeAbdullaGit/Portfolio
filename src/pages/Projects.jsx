import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const projects = [
    {
        title: 'Spin Critters',
        screenshots: [ '/src/assets/SpinCritters.gif','/src/assets/SpinCritters-1.png','/src/assets/SpinCritters-2.png'],
        description: 'During my time at Gaggle, I contributed to the development of multiplayer functionality, specifically working on the matchmaking system that allows up to 8 players to join the same lobby, as well as matching them before each battle. Additionally, I was responsible for programming the unit selection and combat logic, a slot-machine determined the unites that will fight in the upcoming battle and the logic ensured that the game could logically determine the winner based on the units abilities and attributes. The project was done in Unity',
      },
    {
      title: 'Nexus//ESC',
      link: 'https://carw.itch.io/nexusesccelbreak',
      video: 'https://www.youtube.com/embed/w0rG-izBfp8?si=AOyHnbZ58vkgwazD',
      description: 'I designed and developed puzzles for a cooperative game where one player acts as a hacker, manipulating the environment, while the other player, an infiltrator, stealths through enemies and solves puzzles. The hacker helps by distracting enemies and unlocking paths. The game emphasizes teamwork and strategic collaboration. Additionally I did the level designs and implemented them. The Project was done in Unity',
    },
    {
      title: 'Rubbish Rush',
      link: 'https://thevoidangel.itch.io/rubbish-rush',
      video: 'https://www.youtube.com/embed/VvpUrpdVSUE?si=eX-zqDzd4eAxY5c2',
      description: 'A fast-paced game where you clear piles of rubbish by dragging them into the trash before time runs out. I designed the game, developed the core gameplay, created levels, and implemented custom effects triggered by specific environments to enhance the player experience. The project was developed in a custom engine developed using OPENGL and C++',
    },
    {
      title: 'The Beyond',
      link: 'https://thevoidangel.itch.io/the-beyond',
      description: 'A 2D platformer game, where the goal is to reach the highest point and combat obstacles on the way. I implemented the basic controls and laid out the levels for this project. The Project was developed in a custom Engine using OPENGL and C++',
      video: 'https://www.youtube.com/embed/qBoKArjeRfM?si=sTxgN9u6oNCxi2UB'
    },
   
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-slate-300 text-center">
      <div className="w-11/12 md:w-3/4 relative bg-white rounded-lg shadow-lg p-10">
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev top-1/2 -left-15 transform -translate-y-1 bg-gray-700 text-white p-6 rounded-full cursor-pointer"></div>
        <div className="swiper-button-next top-1/2 -right-15 transform -translate-y-1 bg-gray-700 text-white p-6 rounded-full cursor-pointer"></div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          spaceBetween={50} // Adjust spacing between slides
          slidesPerView={1}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="p-6">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

              {/* Screenshots - Flexbox for side-by-side display with different image sizes */}
              <div className="flex gap-2 p-2 mb-4 justify-center">
                {project.screenshots && project.screenshots.map((screenshot, idx) => (
                  <img
                    key={idx}
                    src={screenshot}
                    alt={`Screenshot ${idx + 1} of ${project.title}`}
                    className={`rounded-lg shadow-md ${idx === 0 ? 'w-1/2' : 'w-1/4'}`} // Customize the size of each image
                  />
                ))}
              </div>

              {/* YouTube Video */}
              {project.video && project.video.trim() !== "" ? (
                <div className='aspect-16/9 p-5'>
                  <iframe
                    src={project.video}
                    title={`Video for ${project.title}`}
                    className="w-full h-full rounded-lg shadow-md"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-0"></div> // Placeholder if no video
              )}

              {/* Description */}
              <p className="mb-4 text-lg leading-relaxed">{project.description}</p>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-lg"
                >
                  View Project
                </a>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
