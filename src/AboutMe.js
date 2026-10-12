import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spPic from "./images/sp-pic.png";

const AboutMe = () => {
  const [text, setText] = useState("");
  const fullText = "A  lil' bit about me.";

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFCF9";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
    document.body.style.backgroundColor = "";
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-2 font-lora font-serif min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 pr-8 mt-0">
          <h1 className="text-3xl font-nunito font-bold mb-12 text-center w-full overflow-hidden whitespace-nowrap">
            {text}
            <span className="animate-cursor">|</span>
          </h1>
          <div className="space-y-6">
            <p>
              I'm Sanjana, a product designer who builds. I take AI products
              from the first user conversation to shipped software: running
              discovery, prototyping in Figma, and writing the code myself. I
              came to design through data science, so I like digging into
              complex systems until they feel simple.
            </p>
            <p>
              At&nbsp;
              <a
                href="https://mitre.org"
                className="underline decoration-black"
              >
                MITRE
              </a>
              's Network Analytics Division, I led a research study that built
              an iOS app to help low vision individuals navigate train stations,
              and submitted journal papers on the work. I also fine-tuned LLMs
              to support warfighters, which gave me hands-on experience with how
              these models actually behave.
            </p>
            <p>
              My recent work,{" "}
              <Link to="/voice-verse" className="underline decoration-black">
                Voice Verse
              </Link>{" "}
              and{" "}
              <Link to="/go-sparkle" className="underline decoration-black">
                Go Sparkle
              </Link>
              , explores new patterns for AI that supports neurodivergent people
              without taking over: AI that asks instead of answering, plans that
              bend instead of breaking, and prototypes tested with the teachers
              and coaches who know these users best.
            </p>
            <p>
              I'm looking for a product design role where I can work closely
              with engineers, PMs and researchers on tools that help people
              create, especially where design, code and AI meet. I care about
              making powerful tools accessible to everyone, including the
              communities that usually get designed for last.
            </p>
            <p>
              What sets me apart is how I collaborate. I listen first, give
              thoughtful feedback, and genuinely cheer on other people's ideas,
              in critiques and across the team.
            </p>

            <p>
              If you'd like to work together, reach out via{" "}
              <a
                href="mailto:sanjanapendharkar01@gmail.com"
                className="underline"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0 flex items-center">
          <div className="p-1">
            <img
              src={spPic}
              alt="Sanjana Pendharkar"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
