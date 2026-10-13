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
              I'm Sanjana, a product designer who builds: I run discovery,
              prototype in Figma, and write the code myself.
            </p>
            <p>
              I came to design through data science at&nbsp;
              <a
                href="https://mitre.org"
                className="underline decoration-black"
              >
                MITRE
              </a>
              . There, I led a study helping low vision travelers navigate
              train stations, designing the iOS app in Figma and building it in
              Swift, with an obstacle detection model trained on 1,000+ photos I
              collected. I also fine-tuned LLMs for a RAG pipeline, and learned
              to keep facts in retrieval and use fine-tuning only for behavior.
            </p>
            <p>
              I designed and built{" "}
              <Link to="/voice-verse" className="underline decoration-black">
                Voice Verse
              </Link>{" "}
              and founded{" "}
              <Link to="/go-sparkle" className="underline decoration-black">
                Go Sparkle
              </Link>
              : AI tools for people with ADHD that ask instead of answering.
            </p>
            <p>
              I'm looking for a product design role where design, code and AI
              meet. Reach out via{" "}
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
