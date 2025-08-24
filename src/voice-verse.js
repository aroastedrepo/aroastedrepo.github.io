import React from "react";
import originalVoiceVerse from "./images/original_voice_verse.png";
import basicSection from "./images/basic section.png";
import alexUserProfile from "./images/alex_user_profile_vv.png";
import arianaUserProfile from "./images/ariana_user_profile_vv.png";
import mindMap from "./images/mind_map_vv.png";
import problemsSolutionsBoard from "./images/problems_solutions_board.png";
import advancedEssayOutline from "./images/voice_verse/advanced_essay_outline.png";
import citation from "./images/voice_verse/citation.png";
import feedback from "./images/voice_verse/feedback.png";
import helpBar from "./images/voice_verse/help_bar.png";
import mindMapNew from "./images/voice_verse/mind_map.png";

const VoiceVerseMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <main>
        <h1 className="text-2xl font-bold mb-4 font-nunito p-4 max-w-lg mx-auto">
          Voice Verse is a Conversational AI that helps neurodivergent students
          to write better.
        </h1>
        <hr className="my-6 border-gray-300" />
        <p className="text-l mb-4 font-lora p-4 max-w-lg mx-auto">
          Voice Verse was born from my lived experiences as an English tutor for
          neurodivergent students. One of my students continuously expressed how
          tough it was to translate his thoughts into written words on paper –
          the process of structuring them into coherent sentences was a major
          challenge. We played around with several speech to text tools, but
          couldn't find one that scaffolded him through the essay writing
          process.
        </p>
        <p className="text-l mb-4 font-lora p-4 max-w-lg mx-auto">
          Upon realizing that this was a common need for neurodivergent
          students, especially those with ADHD, I started reading papers in this
          space, cold emailed 50+ high school special education teachers, and,
          with their feedback, drafted a product requirements doc outlining
          feature details. This outreach led to securing long-term partnerships
          with two dedicated teachers who provided invaluable insights
          throughout the design and development process, even volunteering to
          run beta tests with their students.
        </p>
        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={alexUserProfile}
                  alt="User profile showing Alex, a neurodivergent student using Voice Verse for writing assistance"
                  className="w-full h-64 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Alex's profile - high school student with ADHD
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={arianaUserProfile}
                  alt="User profile showing Ariana, a neurodivergent student benefiting from Voice Verse's writing support"
                  className="w-full h-64 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  Ariana's profile - student with writing anxiety
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-2xl font-bold mb-4 font-nunito">
              User Research & Target Audience
            </h2>
            <p className="mb-4 font-lora">
              Prior to starting the design process, it was crucial to determine
              our specific user base. We focused on US high school students aged
              14-18 with ADHD as our main group, drawing from my tutoring
              experience with their challenges in English courses.
            </p>
            <p className="mb-4 font-lora">
              Our research identified several key challenges for this group:
              <ul className="list-disc ml-5 mt-2 mb-4">
                <li>
                  Difficulties with essay structure, particularly organizing
                  sentences into cohesive paragraphs
                </li>
                <li>
                  Writing anxiety – freezing when faced with ambiguous essay
                  prompts
                </li>
                <li>
                  Trouble meeting assignment deadlines due to challenges with
                  time management
                </li>
              </ul>
            </p>
            <p className="mb-4 font-lora">
              The teachers we partnered with emphasized the need for an
              interface that was engaging yet not overwhelming, supportive
              without being patronizing, and adaptive to different learning
              styles.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={mindMap}
                alt="Interactive mind map interface showing how Voice Verse helps students organize their thoughts visually before writing"
                className="w-full h-64 object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              Mind map created during the ideation phase showing key concepts
              for neurodivergent communication
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4 font-nunito">
              Initial Ideation & Design Process
            </h3>
            <p className="font-lora mb-4">
              As the sole developer and designer, I began the ideation phase
              with{" "}
              <a
                href="https://itk.mitre.org/"
                className="underline decoration-black"
              >
                MITRE's Innovation Toolkit methodologies
              </a>
              . I started off with the Mindmapping Exercise, where I took the
              main topic as{" "}
              <i>Conversational AI for neurodivergent communication</i>, and
              listed out all thoughts, questions and concerns I had.
              <br></br>
              <br></br>
              As I supplemented my discoveries with research papers and
              discussions with educators in English and special education, I was
              able to grasp the technical capabilities and limitations of
              conversational AI (at the moment, we are in the midst of a voice
              AI renaissance, and this idea gave me a clear picture into this
              space), the unique UI/UX considerations that would encourage
              adoption in the neurodivergent community, and how to leverage AI
              to appropriately sense and provide support in communication
              experiences.
            </p>
            <p className="font-lora mb-4">
              Through research papers and discussions with educators, I gained
              insights into technical capabilities of conversational AI, UI/UX
              considerations for neurodivergent users, and how to leverage AI to
              provide appropriate support.
            </p>
            <p className="font-lora">
              I focused on 5 key questions through the Problem Framing Exercise:
              <ul className="list-disc ml-5 mt-2 mb-2">
                <li>
                  How do ADHD-specific challenges manifest in writing tasks?
                </li>
                <li>
                  How can conversational AI adapt to ADHD students' unique
                  attention-based needs?
                </li>
                <li>
                  How can AI provide structure without being overly rigid?
                </li>
                <li>
                  How can the system support development of self-regulation
                  strategies?
                </li>
                <li>
                  What classroom ecosystem changes are needed to accommodate
                  ADHD students?
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={problemsSolutionsBoard}
                alt="Problem-solution analysis board displaying challenges neurodivergent students face with writing and Voice Verse's solutions"
                className="w-full h-64 object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              Problems and solutions board developed from teacher interviews
              showing pain points and potential approaches
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4 font-nunito">
              User Interviews & Iterative Prototyping
            </h3>
            <div className="font-lora mb-6">
              <p className="mb-4">
                The initial prototype functioned as a comprehensive essay
                creation tool that, when provided with a single word topic, and
                student answers to a few questions, an entire essay outline
                could be generated. From the essay outline, the app would
                generate a few more questions for students to answer, and then
                draft entire paragraphs that they had the option of either
                accepting or editing. The interface was optimized for
                efficiency, allowing students to quickly produce
                polished-looking academic papers.
              </p>

              <p className="mb-4">
                Upon demonstrating this to high school English educators, we
                received the following feedback:
              </p>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                <p className="mb-2">
                  "My biggest concern was that students stopped engaging with
                  the actual writing process. They'd input minimal information
                  and expect the AI to do everything else. It reinforced their
                  learned helplessness rather than building the executive
                  functioning skills they desperately need."
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                <p>
                  "The writing quality was impressive, but it felt like academic
                  ghostwriting. How do I assess a student's understanding when
                  the AI generated most of the content? It also created this
                  false confidence in tudents — they thought they were better
                  writers than they actually were because the output looked so
                  professional."
                </p>
              </blockquote>

              <p className="mb-4">
                Learning from the first prototype's limitations, the second
                iteration broke essay writing into discrete prompts that guided
                students through each stage of the process, especially important
                sequences in writing, such as thesis statement and topic
                sentence. The UX was considerably changed, with brighter colors,
                and more engaging designs. It emphasized interactivity, as we
                got rid of static outlines, and entire paragraph generation. The
                AI now asked targeted questions like "What's one specific
                example that supports your main idea, and why?" or "How does
                this connect to what you discussed in your previous paragraph?"
                The tool provided structure and prompts while requiring students
                to generate their own ideas, and produce responses in their own
                words.
              </p>

              <p className="mb-4">
                Upon demonstrating this to high school English educators, we
                received the following feedback:
              </p>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                <p className="mb-2">
                  "This feels like having a writing coach sitting next to each
                  student. The prompts helped them organize their thoughts
                  without doing the thinking for them. This would help students
                  who usually freeze up during writing."
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                <p>
                  "The pacing is much better suited for ADHD students. Instead
                  of overwhelming them with a blank page, it gives them one
                  manageable task at a time. Students who normally give up after
                  the introduction will be able to complete full essays."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 font-nunito text-center">
            Current Status
          </h3>
          <p className="font-lora mb-8 text-center">
            As of today, this prototype is in the process of beta testing with
            high schools in NJ and VA.
            <br></br>
            You can see the first version{" "}
            <a
              href="https://voice-verse-v1.web.app/"
              className="underline decoration-black"
            >
              here
            </a>
            . The most recent version of the app is still pending edits, but you
            can view it{" "}
            <a
              href="https://voice-verse-v2.web.app/"
              className="underline decoration-black"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 font-nunito text-center">
            Voice Verse Gallery
          </h3>
          {/* First 4 images in rows of 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-8 mb-16">
            <img
              src={advancedEssayOutline}
              alt="Voice Verse advanced essay outline feature showing structured writing prompts and organization tools"
              className="w-full md:w-96 h-auto object-cover mx-auto max-w-lg"
            />

            <img
              src={citation}
              alt="Voice Verse citation management tool helping students properly format and organize their sources"
              className="w-full md:w-96 h-auto object-cover mx-auto max-w-lg"
            />

            <img
              src={feedback}
              alt="Voice Verse interactive feedback system providing real-time writing guidance and suggestions to students"
              className="w-full md:w-96 h-auto object-cover mx-auto max-w-lg"
            />

            <img
              src={helpBar}
              alt="Voice Verse contextual help sidebar offering writing tips and assistance based on current student activity"
              className="w-full md:w-96 h-auto object-cover mx-auto max-w-lg"
            />
          </div>

          {/* Last image centered */}
          <div className="flex justify-center gap-12 md:gap-24 mb-16">
            <div className="w-full md:w-1/3 max-w-lg">
              <img
                src={mindMapNew}
                alt="Voice Verse mind mapping interface allowing students to brainstorm and connect ideas before writing"
                className="w-full md:w-96 h-auto object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceVerseMain;
