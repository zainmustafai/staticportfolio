import React from "react";
const ProjectCard = ({ projectObject, animationDuration }) => {
  return (
    <div className=" w-full  xsm:px-[12%] sm:p-0 ">
      <img
        src={projectObject.img}
        alt={"project-img"}
        className="h-full"
        data-aos="fadeInUp"
        data-aos-duration={animationDuration}
      />
      <div
        className="h-full w-full px-4 flex flex-col items-center justify-around opacity-[0.01] transition  ease-in-out   duration-300 hover:opacity-100 bg-white -translate-y-[100%]"
      // This is Overlay White Card
      // data-aos="fadeIn"
      // data-aos-duration={animationDuration}
      >
        <div className="flex flex-col items-center h-[20%] justify-around">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            {projectObject.title}
          </h1>
          <h2 className="">{projectObject.type}</h2>
        </div>
        <button
          onClick={() => {
            window.open(projectObject.link, '_blank', 'noopener,noreferrer'); // open link in new tab.
          }}
          className="w-[150px] h-[50px] font-semibold border-2 text-red-600 hover:scale-110 hover:shadow-xl hover:bg-red-500 hover:border-0 hover:text-white transition ease-in duration-150">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
