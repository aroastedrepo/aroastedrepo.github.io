import React from "react";
import introScreen from "./images/intro_screen.png";
import aliyaUserProfile from "./images/aliya_user_profile_spai.png";
import ericUserProfile from "./images/eric_user_profile_spai.png";
import taskDumpWeekly from "./images/task_dump_weekly.png";
import rewardsTransitions from "./images/rewards_transitions.png";
import createSaveRunTasks from "./images/create_save_run_tasks.png";
import longTermProjects from "./images/long_term_projects.png";
import routineManagerCalendar from "./images/routine_manager_calendar.png";
import taskDumpMonthly from "./images/task_dump_monthly.png";
import appsKeyProblems from "./images/apps_key_problems_spai.png";
import userJourney from "./images/user_journey_spai.png";

const SparkleAIMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <main>
        <h1 className="text-2xl font-bold mb-4 font-nunito p-4 max-w-lg mx-auto">
          Sparkle AI is an AI long term planning and productivity companion for
          neurodivergent adults.
        </h1>
        <hr className="my-6 border-gray-300" />
        <p className="text-l mb-4 font-lora p-4 max-w-lg mx-auto">
          Sparkle AI emerged from a lasting set of conversations I had with an
          ADHD coach, who was discussing the unique challenges her clients
          faced. These conversations revealed a gap in existing tools—nothing
          specifically addressed the intersection of neurodivergent thinking
          patterns and voice AI assistance. The coach noticed that her clients
          often struggled with traditional task management systems due to their
          lack of adaptability to the executive functioning needs of ADHD
          clients. This insight sparked the idea for an AI coach that could
          provide the kind of gentle, consistent time management guidance and
          strategies that many people with ADHD need to thrive.
        </p>
        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={aliyaUserProfile}
                  alt="Aliya User Profile"
                  className="w-full h-96 object-contain"
                />
                <p className="text-sm text-gray-600 mt-3 text-center italic">
                  Aliya's profile
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={ericUserProfile}
                  alt="Eric User Profile"
                  className="w-full h-96 object-contain"
                />
                <p className="text-sm text-gray-600 mt-3 text-center italic">
                  Eric's profile
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-2xl font-bold mb-4 font-nunito">
              User Research & Target Audience
            </h2>
            <p className="mb-4 font-lora">
              Through discussions with the ADHD coach, we identified young
              adults from the US (ages 18-35) with ADHD diagnoses as our target
              user base. This tech-savvy generation faces unique challenges
              navigating major life transitions like college, careers, and
              independent living. The coach noted her clients wanted all-in-one
              technology solutions with flexible, customizable interfaces that
              prioritized voice-based communication to match their preferences
              and needs.
            </p>
            <p className="mb-4 font-lora">
              We initially had a few brainstorming sessions, the first of which
              outlined the two major challenges for this population – emotional
              regulation and task transitioning. People with ADHD often
              experience intense emotions that can derail their entire day.
              Small setbacks like missing a deadline or forgetting an
              appointment can trigger overwhelming feelings of shame,
              frustration, or anxiety. These emotional responses make it hard to
              bounce back and continue with planned tasks. Traditional
              productivity apps don't account for these emotional storms,
              leaving users feeling worse when they can't maintain consistent
              habits or check off their to-do lists as expected.
            </p>
            <p className="mb-4 font-lora">
              With regards to task transitioning, moving from one activity to
              another is particularly difficult for people with ADHD due to
              executive function challenges. They might hyperfocus on one task
              and lose track of time, or struggle to start new activities even
              when they know what needs to be done. The mental effort required
              to stop one thing, organize thoughts, and begin something else can
              feel overwhelming. Existing apps typically present tasks as simple
              lists, but they don't provide the scaffolding needed to help users
              transition smoothly between different types of work or activities.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={appsKeyProblems}
                alt="Competitive Analysis of ADHD Apps"
                className="w-full h-96 object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              Analysis of key problems in existing ADHD productivity apps
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4 font-nunito">
              Competitive Analysis & Design Approach
            </h3>
            <p className="font-lora mb-4">
              I then performed a competitive analysis, by analyzing all of the
              recommended emotional regulation and task transitoning apps
              provided by the coach as a reference to her clients, answering the
              following questions:
              <ul className="list-disc ml-5 mt-2 mb-2">
                <li>
                  Is the app easy to navigate? How quickly can a new user become
                  familiar with the app – is there a significant learning curve?
                </li>
                <li>
                  Can users complete tasks efficiently without unnecessary
                  steps, and can they customize their experience as per their
                  own preferences?
                </li>
                <li>
                  What is the quality of the help section or tutorials for users
                  who need assistance?
                </li>
                <li>
                  How does the app encourage continued use (perhaps through
                  gamification, rewards, or user interaction forums / feedback
                  channels)?
                </li>
                <li>
                  How satisfied does the user feel after using the application?
                  Has it met their specific problem, and does it evoke positive
                  emotions (enjoyment / comfort)?
                </li>
              </ul>
            </p>
            <p className="font-lora mb-4">
              You can read my app analysis, and curated product insights{" "}
              <a
                href="https://docs.google.com/document/d/1EOWA8xj4TGlUT_7PfB5WTxbIjsv4qbXvS04U0r3VxaU/edit?tab=t.0"
                className="underline decoration-black"
              >
                here
              </a>
              .
            </p>
            <p className="font-lora mb-4">
              We decided to tackle both problems in our long term task
              management planning app by providing users with a UX that aligned
              with how people with ADHD communicate emotionally and provided
              simple cues to help them switch between tasks.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={userJourney}
                alt="User Journey Map for ADHD Users"
                className="w-full h-96 object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              User journey mapping showing different stages of task management
              for ADHD users
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4 font-nunito">
              User Journey Mapping & Prototyping
            </h3>
            <div className="font-lora mb-6">
              <p className="mb-4">
                <strong>Task Recognition</strong>
                <br />
                Our app uses AI to help users identify and prioritize tasks
                through conversational voice input. When users feel overwhelmed,
                they can speak their thoughts aloud and the app helps organize
                competing priorities into manageable categories, reducing
                analysis paralysis through gentle guidance.
                <br />
                <br />
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  <p>
                    "My clients often tell me they have a million things
                    swirling in their head, but they can't figure out what to
                    tackle first. They need someone to help them dump it all out
                    and make sense of it."
                  </p>
                </blockquote>
              </p>

              <p className="mb-4">
                <strong>Planning</strong>
                <br />
                The app breaks down complex tasks into smaller, realistic steps
                through interactive voice dialogue. It helps users estimate time
                more accurately by learning from their past patterns and
                provides flexible planning that adapts when working memory
                limitations make it hard to remember all details.
                <br />
                <br />
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  <p>
                    "They'll make these elaborate plans and then completely
                    forget what they were trying to accomplish halfway through.
                    It's like their brain can't hold onto the big picture while
                    focusing on the details."
                  </p>
                </blockquote>
              </p>

              <p className="mb-4">
                <strong>Initiation</strong>
                <br />
                Our solution reduces activation energy by offering personalized
                starting rituals and ambient sounds that create the right mental
                environment. The app provides gentle encouragement and removes
                barriers to beginning through simple voice commands that
                eliminate the friction of traditional interfaces.
                <br />
                <br />
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  <p>
                    "Getting started is always the hardest part. One client
                    described it as 'sitting in front of a wall that feels
                    impossible to climb, even though I know it's just a small
                    step.'"
                  </p>
                </blockquote>
              </p>

              <p className="mb-4">
                <strong>Execution</strong>
                <br />
                The app supports sustained focus through time awareness prompts
                and gentle check-ins that redirect hyperfocus when needed. It
                captures progress through voice notes so users don't lose
                context during interruptions, and provides personalized ambient
                sounds to maintain optimal attention levels.
                <br />
                <br />
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  <p>
                    "They either can't focus at all, or they disappear into a
                    task for six hours and forget to eat. There's no middle
                    ground, and they lose track of everything else that
                    matters."
                  </p>
                </blockquote>
              </p>

              <p className="mb-4">
                <strong>Completion</strong>
                <br />
                Our app recognizes when users are in the final stages and
                provides extra motivation through celebratory feedback and
                micro-step breakdowns. Our AI coach offers emotional support
                during the challenging completion phase, helping users push
                through the final 10-20% with encouragement and concrete next
                steps.
                <br />
                <br />
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                  <p>
                    "I see so many projects that are 90% done just sitting
                    there. They get so close to the finish line and then hit
                    this wall where it feels impossible to take those last few
                    steps."
                  </p>
                </blockquote>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 font-nunito text-center">
            Prototyping Methodology
          </h3>
          <p className="font-lora mb-4 text-center max-w-3xl mx-auto">
            Our prototyping approach evolved through multiple iteration cycles,
            each specifically designed to address the unique challenges faced by
            ADHD users. We began with low-fidelity wireframes and concept
            sketches to test interaction patterns. Early prototypes explored
            different ways users could input tasks and receive guidance, testing
            whether traditional menu structures or more fluid, conversational
            approaches worked better for our target demographic.
          </p>
          <p className="font-lora mb-8 text-center max-w-3xl mx-auto">
            We adopted co-design approaches with the ADHD coach that treated her
            as a collaborator rather than just a test subject. We prioritized
            involving her in brainstorming sessions and prototype refinement
            discussions. She helped us understand which features felt supportive
            versus overwhelming, where AI could be used as a motivator, and how
            AI could be used to re-engage or inspire a user to pursue their
            goals in a manageable method.
            <br></br>
            <br></br>
            Currently, we are starting the process of beta testing for this
            mobile app. Once we achieve sufficient scores on metrics, our plan
            is to deploy it to the Apple App Store and Google Play Store.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 font-nunito text-center">
            Sparkle AI Interface Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-16">
            <div className="flex flex-col items-center">
              <img
                src={introScreen}
                alt="Introduction Screen"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Introduction screen with welcoming interface
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={createSaveRunTasks}
                alt="Create, Save and Run Tasks"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Create, save, and run task interface
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={longTermProjects}
                alt="Long Term Projects View"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Long-term projects planning view
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={rewardsTransitions}
                alt="Rewards and Transitions"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Rewards and transitions interface
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={routineManagerCalendar}
                alt="Routine Manager Calendar"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Routine manager calendar view
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={taskDumpMonthly}
                alt="Monthly Task Dump View"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Monthly task organization view
              </p>
            </div>
            <div className="flex flex-col items-center lg:col-start-2 md:col-span-2 lg:col-span-1">
              <img
                src={taskDumpWeekly}
                alt="Weekly Task Dump View"
                className="w-full h-96 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Weekly task organization view
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SparkleAIMain;
