import React from "react";
import { Link } from "react-router-dom";
import { starfield } from "./case-study-components";
import vvLogin from "./images/voice_verse/vv_login.png";
import gsLogin from "./images/go_sparkle/figma/gs_login.png";
import gsLoginPeach from "./images/go_sparkle/figma/gs_login_peach.png";
import gsLoginBlue from "./images/go_sparkle/figma/gs_login_blue.png";

// Card artwork mirrors each case study's hero, so the card previews the page.
const VoiceVerseArt = () => (
  <div
    className="relative h-full bg-vv-space overflow-hidden flex items-end justify-center"
    style={starfield}
  >
    <img
      src={vvLogin}
      alt=""
      className="w-[62%] translate-y-[18%] rounded-t-xl ring-1 ring-vv-line transition-transform duration-500 group-hover:translate-y-[12%]"
    />
  </div>
);

const GoSparkleArt = () => (
  <div className="relative h-full bg-gradient-to-b from-gs-lavender to-gs-cream overflow-hidden">
    <img
      src={gsLoginPeach}
      alt=""
      className="absolute w-[30%] left-[10%] top-[22%] -rotate-6 rounded-2xl shadow-lg transition-transform duration-500 group-hover:-rotate-[9deg]"
    />
    <img
      src={gsLoginBlue}
      alt=""
      className="absolute w-[30%] right-[10%] top-[22%] rotate-6 rounded-2xl shadow-lg transition-transform duration-500 group-hover:rotate-[9deg]"
    />
    <img
      src={gsLogin}
      alt=""
      className="absolute w-[36%] left-1/2 -translate-x-1/2 top-[12%] rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
    />
  </div>
);

const projects = [
  {
    title: "Voice Verse",
    link: "/voice-verse",
    description:
      "A conversational AI that helps neurodivergent students write better, one guided question at a time.",
    tags: ["Web app", "Conversational AI"],
    Art: VoiceVerseArt,
    accent: "text-vv-link",
  },
  {
    title: "Go Sparkle",
    link: "/go-sparkle",
    description:
      "A gentle AI planning companion that helps adults with ADHD turn overwhelm into tiny, doable steps.",
    tags: ["Mobile app", "Figma prototype"],
    Art: GoSparkleArt,
    accent: "text-gs-purple",
  },
];

const ProjectCard = ({ title, link, description, tags, Art, accent }) => (
  <Link
    to={link}
    className="group flex flex-col w-full max-w-md mx-auto bg-white rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="aspect-[4/3]" aria-hidden="true">
      <Art />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-nunito font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-nunito text-xs font-bold tracking-wide uppercase text-gray-600 bg-gray-100 rounded-full px-3 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-gray-600 font-lora leading-relaxed flex-grow">
        {description}
      </p>
      <span className={`mt-5 font-nunito font-bold text-sm ${accent}`}>
        View case study{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>
  </Link>
);

const ProjectsPage = () => (
  <div className="max-w-6xl mx-auto py-8 font-lora">
    <main>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  </div>
);

export default ProjectsPage;
