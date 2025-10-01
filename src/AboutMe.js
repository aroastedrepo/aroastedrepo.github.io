import React, { useState, useEffect } from "react";
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
              I'm Sanjana, an ambitious, driven data scientist and product
              designer. Formerly, I was an Associate for&nbsp;
              <a
                href="https://mitre.org"
                className="underline decoration-black"
              >
                MITRE
              </a>
              's Network Analytics Division, where I led a research study that
              built an iOS app to help low vision individuals navigate train
              stations. As a part of this study, I submitted journal papers on
              my research. During my tenure here, I also worked on fine-tuning
              LLMs to support warfighters.
            </p>
            <p>
              Currently, I am back on the job market. I'm looking for a role
              with high agency, and high impact. I'd like to work on meaningful
              problems, and develop software that addresses the needs of
              vulnerable, marginalized communities.
            </p>
            <p>
              If there is one quality that sets me apart from most engineers,
              it's my compassion. I strive to listen, learn and cheer on others.
              I'm always there to help out and support anyone, especially if
              they are eager to share their ideas.
            </p>

            <p>
              If you're interested in seeing how I can best support you, or want
              to collaborate, feel free to reach out via{" "}
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
