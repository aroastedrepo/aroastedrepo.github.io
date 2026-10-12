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
              discovery, prototyping in Figma, and writing the code myself.
            </p>
            <p>
              I came to design through data science. I designed and built an
              evaluation framework for a military operations pipeline, and used
              geospatial libraries to pinpoint US schools struggling with
              broadband access as the government rolled out 5G.
            </p>
            <p>
              As an Associate in&nbsp;
              <a
                href="https://mitre.org"
                className="underline decoration-black"
              >
                MITRE
              </a>
              's Network Analytics Division, I led a research study on helping
              low vision travelers navigate train stations. I designed the iOS
              app in Figma, built it in Swift, and fine-tuned a transformer in
              PyTorch for obstacle detection, on a dataset of 1,000+ train
              station photos I collected from scratch. Five MITRE mentors tested
              it in the McLean metro and rated it between sub-satisfactory and
              passable, so I'm redesigning it with multimodal models for
              subtler cues and indoor positioning for better spatial awareness.
              I submitted journal papers on the work.
            </p>
            <p>
              I also fine-tuned LLMs to improve the generation step of a RAG
              pipeline supporting warfighters. In 2024, we used fine-tuning to
              teach the model facts, and it overfit. That taught me to separate
              knowledge from behavior: retrieval supplies the facts, and
              fine-tuning shapes domain vocabulary, instruction following and
              tone. I design AI features the same way.
            </p>
            <p>
              I designed and built{" "}
              <Link to="/voice-verse" className="underline decoration-black">
                Voice Verse
              </Link>{" "}
              end to end, and I'm the founder and product designer of{" "}
              <Link to="/go-sparkle" className="underline decoration-black">
                Go Sparkle
              </Link>
              . Both explore new patterns for AI that supports neurodivergent
              people without taking over: AI that asks instead of answering,
              plans that bend instead of breaking, and prototypes tested with
              the teachers and coaches who know these users best.
            </p>
            <p>
              I'm looking for a product design role where I can work closely
              with engineers, PMs and researchers on tools that help people
              create, especially where design, code and AI meet. Every product
              I've led serves people most tools overlook: low vision commuters,
              students with ADHD, and adults managing ADHD.
            </p>
            <p>
              I give direct, useful feedback. When I critiqued a colleague's
              Early Career Research Program proposal at MITRE, I pushed for more
              rigor in the approach and more citations in the literature
              review. The proposal went on to win the grant.
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
