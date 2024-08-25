import React from "react";
import jamItLogo from "./images/jam-it-logo.png";
import togetherNotAloneLogo from "./images/together-not-alone-logo.png";
import JamItMain from "./JamIt.js";
import { Link, Route, Routes } from "react-router-dom";

const ProjectCard = ({ title, description, imageSrc }) => {
  const linkTo =
    title.toLowerCase() === "jam it"
      ? "/jam-it"
      : `/${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link to={linkTo} className="flex w-full max-w-sm mx-auto">
      <div className="border border-gray-250 rounded-lg overflow-hidden shadow-sm flex flex-col w-full h-[475px]">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-nunito font-bold mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-600 font-lora text-sm flex-grow overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Jam It",
      description:
        "A VR music sharing community for musicians and fans to create their own concert venues using drag and drop designs",
      imageSrc: jamItLogo,
      component: JamItMain,
      link: "/jam-it",
    },
    {
      title: "Together Not Alone",
      description:
        "Notes from serving as Tech Lead for this mental health nonprofit",
      imageSrc: togetherNotAloneLogo,
      link: "/together-not-alone",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 font-lora">
      <main>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
