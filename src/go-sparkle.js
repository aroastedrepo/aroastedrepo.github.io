import React from "react";
import {
  FullBleed,
  GallerySlider,
  ZoomableImage,
  DecisionGrid,
} from "./case-study-components";

import aliyaUserProfile from "./images/aliya_user_profile_spai.png";
import ericUserProfile from "./images/eric_user_profile_spai.png";
import appsKeyProblems from "./images/apps_key_problems_spai.png";
import userJourney from "./images/user_journey_spai.png";
import gsLogin from "./images/go_sparkle/figma/gs_login.png";
import gsLoginPeach from "./images/go_sparkle/figma/gs_login_peach.png";
import gsLoginBlue from "./images/go_sparkle/figma/gs_login_blue.png";
import gsCalendar from "./images/go_sparkle/figma/gs_calendar.png";
import gsSparkleMyDay from "./images/go_sparkle/figma/gs_sparkle_my_day.png";
import gsTentacleFocus from "./images/go_sparkle/figma/gs_tentacle_focus.png";
import gsGrowingTogether from "./images/go_sparkle/figma/gs_growing_together.png";
import gsGratitudeReef from "./images/go_sparkle/figma/gs_gratitude_reef.png";
import gsReefMemory from "./images/go_sparkle/figma/gs_reef_memory.png";

const ANALYSIS_URL =
  "https://docs.google.com/document/d/1EOWA8xj4TGlUT_7PfB5WTxbIjsv4qbXvS04U0r3VxaU/edit?tab=t.0";
const PROTOTYPE_URL =
  "https://www.figma.com/proto/ZyZ3vjsfazJybzCAqStyp5?node-id=0-1&t=tsJwjL9tl2ydQavA-6";
const PROTOTYPE_EMBED_URL =
  "https://embed.figma.com/proto/ZyZ3vjsfazJybzCAqStyp5?node-id=0-1&embed-host=share&scaling=scale-down&content-scaling=fixed";

const facts = [
  { label: "Users", value: "Adults (18–35) with ADHD" },
  { label: "Partner", value: "ADHD coach, as co-designer" },
  { label: "Focus", value: "Emotional regulation & task transitions" },
  { label: "Status", value: "Starting mobile beta testing" },
];

const screens = [
  {
    src: gsLogin,
    alt: "Go Sparkle sign-in screen with a purple octopus and a customize panel for colors and accessories",
    caption: "Sign in and make the octopus yours: three colors, three accessories.",
  },
  {
    src: gsCalendar,
    alt: "Go Sparkle calendar showing a busy Sunday split into morning, afternoon and evening events",
    caption: "Your calendar, grouped into morning, afternoon and evening.",
  },
  {
    src: gsSparkleMyDay,
    alt: "Sparkle my day screen proposing a gentler plan that keeps, shortens or moves tonight's events",
    caption: "Sparkle my day: tell it how you feel and it proposes a gentler plan.",
  },
  {
    src: gsTentacleFocus,
    alt: "Tentacle focus screen breaking a journaling task into four tiny steps, one per tentacle",
    caption: "Tentacle focus: one tiny step per tentacle, up to eight.",
  },
  {
    src: gsGrowingTogether,
    alt: "Focus timer with the octopus whose tentacles glow as steps are completed",
    caption: "Growing together: tentacles glow as each step gets done.",
  },
  {
    src: gsGratitudeReef,
    alt: "Gratitude reef: an underwater scene where reflections become coral and shells",
    caption: "Gratitude Reef: friends become coral, personal wins become shells.",
  },
  {
    src: gsReefMemory,
    alt: "A reef memory card for tea with a friend, with the journal excerpt and a suggested thank-you",
    caption: "Revisit a memory and, only if it feels right, send a thank-you.",
  },
];

const journeyStages = [
  {
    title: "Task Recognition",
    body: "Our app uses AI to help users identify and prioritize tasks through conversational voice input. When users feel overwhelmed, they can speak their thoughts aloud and the app helps organize competing priorities into manageable categories, reducing analysis paralysis through gentle guidance.",
    quote:
      "My clients often tell me they have a million things swirling in their head, but they can't figure out what to tackle first. They need someone to help them dump it all out and make sense of it.",
  },
  {
    title: "Planning",
    body: "The app breaks down complex tasks into smaller, realistic steps through interactive voice dialogue. It helps users estimate time more accurately by learning from their past patterns and provides flexible planning that adapts when working memory limitations make it hard to remember all details.",
    quote:
      "They'll make these elaborate plans and then completely forget what they were trying to accomplish halfway through. It's like their brain can't hold onto the big picture while focusing on the details.",
  },
  {
    title: "Initiation",
    body: "Our solution reduces activation energy by offering personalized starting rituals and ambient sounds that create the right mental environment. The app provides gentle encouragement and removes barriers to beginning through simple voice commands that eliminate the friction of traditional interfaces.",
    quote:
      "Getting started is always the hardest part. One client described it as 'sitting in front of a wall that feels impossible to climb, even though I know it's just a small step.'",
  },
  {
    title: "Execution",
    body: "The app supports sustained focus through time awareness prompts and gentle check-ins that redirect hyperfocus when needed. It captures progress through voice notes so users don't lose context during interruptions, and provides personalized ambient sounds to maintain optimal attention levels.",
    quote:
      "They either can't focus at all, or they disappear into a task for six hours and forget to eat. There's no middle ground, and they lose track of everything else that matters.",
  },
  {
    title: "Completion",
    body: "Our app recognizes when users are in the final stages and provides extra motivation through celebratory feedback and micro-step breakdowns. Our AI coach offers emotional support during the challenging completion phase, helping users push through the final 10-20% with encouragement and concrete next steps.",
    quote:
      "I see so many projects that are 90% done just sitting there. They get so close to the finish line and then hit this wall where it feels impossible to take those last few steps.",
  },
];

const decisions = [
  {
    title: "Plans bend instead of break",
    body: "In Sparkle my day, users say how they feel (I'm behind, low energy, too much planned) and get a gentler plan that keeps, shortens or moves each event. A derailed day becomes something to adjust, not a reason to feel shame.",
  },
  {
    title: "The AI suggests, the user decides",
    body: "Nothing changes until the user confirms. The proposed plan sits next to the current one, with a one-tap way to keep the original, so the AI never quietly rewrites someone's day.",
  },
  {
    title: "Tentacle-sized steps",
    body: "Tentacle focus turns a calendar moment into at most eight tiny, timed steps, one per tentacle. The metaphor caps the scope, so getting started always feels small.",
  },
  {
    title: "Progress that's visible and forgiving",
    body: "Tentacles glow as each step is completed, and pausing is built in: \"Pauses are welcome. Your growth stays with you.\" Focus is rewarded without punishing interruptions.",
  },
  {
    title: "Reflection you can watch grow",
    body: "In the Gratitude Reef, moments with friends become coral and personal wins become shells. Missing a day never erases a memory, so the positive reinforcement users valued in Loop never turns into a streak to lose.",
  },
  {
    title: "Personal from the first screen",
    body: "At sign-in, users choose the octopus's color and accessory. Coach interviews and the competitive analysis both pointed to customization as key to sticking with an app.",
  },
];

const prototypeTour = [
  "Sign in and pick a color for your octopus",
  "Open your calendar for a packed Sunday",
  "Tap Sparkle to ask for a gentler plan",
  "Break a task into tentacle-sized steps",
  "Watch the tentacles glow as you focus",
  "Grow your Gratitude Reef from reflections",
];

const Eyebrow = ({ number, label }) => (
  <p className="font-nunito text-xs font-bold tracking-[0.2em] uppercase mb-3 text-gs-purple">
    {number} — {label}
  </p>
);

const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-bold font-nunito text-gs-plum mb-5 ${className}`}>
    {children}
  </h2>
);

const TextLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gs-purple underline decoration-gs-octo/50 decoration-2 underline-offset-2 hover:decoration-gs-purple"
  >
    {children}
  </a>
);

const ButtonLink = ({ href, children, primary = false, newTab = true }) => (
  <a
    href={href}
    {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
    className={`inline-block font-nunito font-bold text-sm tracking-wide px-6 py-3 rounded-full transition-colors shadow-sm ${
      primary
        ? "bg-gs-purple text-white hover:bg-gs-plum"
        : "bg-white text-gs-plum ring-1 ring-gs-octo/40 hover:bg-gs-lilac"
    }`}
  >
    {children}
  </a>
);

const Phone = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-[2rem] shadow-xl ring-1 ring-gs-plum/10 ${className}`}
  />
);

const SparkleMain = () => {
  return (
    <div className="font-lora text-gray-800">
      {/* Hero */}
      <FullBleed className="bg-gradient-to-b from-gs-lavender via-gs-lavender to-gs-cream mt-8 overflow-hidden">
        <div className="max-w-[68rem] mx-auto px-8 pt-16 pb-12 md:pt-20 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow number="Case study" label="AI productivity companion" />
            <h1 className="font-nunito font-bold text-gs-plum text-5xl md:text-6xl tracking-tight mb-6">
              Go Sparkle
            </h1>
            <p className="font-nunito text-xl md:text-2xl leading-snug text-gs-plum/80 mb-8">
              A gentle planning companion that helps adults with ADHD turn
              overwhelm into tiny, doable steps, with an octopus cheering them
              on.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#prototype" primary newTab={false}>
                Try the clickable prototype
              </ButtonLink>
              <ButtonLink href={ANALYSIS_URL}>Read my app analysis</ButtonLink>
            </div>
          </div>
          <div className="relative h-[26rem] md:h-[30rem]" aria-hidden="true">
            <Phone
              src={gsLoginPeach}
              alt=""
              className="absolute w-40 md:w-48 left-[4%] top-12 -rotate-6 opacity-90"
            />
            <Phone
              src={gsLoginBlue}
              alt=""
              className="absolute w-40 md:w-48 right-[4%] top-12 rotate-6 opacity-90"
            />
            <Phone
              src={gsLogin}
              alt=""
              className="absolute w-52 md:w-60 left-1/2 -translate-x-1/2 top-0"
            />
          </div>
        </div>
        <dl className="max-w-[68rem] mx-auto px-8 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="bg-white/70 backdrop-blur rounded-2xl px-4 py-3 ring-1 ring-gs-octo/20"
            >
              <dt className="font-nunito text-xs font-bold tracking-[0.2em] uppercase text-gs-purple mb-1">
                {fact.label}
              </dt>
              <dd className="font-nunito text-sm text-gs-plum">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </FullBleed>

      <div className="max-w-5xl mx-auto py-16 space-y-20">
        {/* Background */}
        <section className="max-w-3xl">
          <Eyebrow number="01" label="Background" />
          <SectionHeading>Why I built it</SectionHeading>
          <p className="leading-relaxed">
            Go Sparkle grew out of an ongoing series of conversations with an
            ADHD coach about the challenges her clients faced. Her clients kept
            bouncing off traditional task managers, which assume a steady,
            linear executive function that many people with ADHD don't have,
            and nothing on the market combined neurodivergent thinking patterns
            with voice AI assistance. That gap became the brief: an AI coach
            that offers the gentle, consistent time management guidance and
            strategies people with ADHD need to thrive.
          </p>
        </section>

        {/* Research */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <ZoomableImage
              src={aliyaUserProfile}
              alt="User persona for Aliya, a content creator with ADHD"
              caption="Aliya — content creator juggling commitments"
            />
            <ZoomableImage
              src={ericUserProfile}
              alt="User persona for Eric, a management consultant with ADHD"
              caption="Eric — consultant studying for the GMAT"
            />
          </div>
          <div>
            <Eyebrow number="02" label="Research" />
            <SectionHeading>User Research & Target Audience</SectionHeading>
            <p className="mb-4 leading-relaxed">
              Through discussions with the ADHD coach, we identified young
              adults from the US (ages 18-35) with ADHD diagnoses as our target
              user base. This tech-savvy generation faces unique challenges
              navigating major life transitions like college, careers, and
              independent living. The coach noted her clients wanted all-in-one
              technology solutions with flexible, customizable interfaces that
              prioritized voice-based communication to match their preferences
              and needs.
            </p>
            <p className="mb-4 leading-relaxed">
              We initially had a few brainstorming sessions, the first of which
              outlined the two major challenges for this population:
            </p>
            <div className="space-y-4">
              <div className="bg-gs-lavender rounded-2xl p-5">
                <h3 className="font-nunito font-bold text-gs-plum mb-2">
                  Emotional regulation
                </h3>
                <p className="leading-relaxed text-[0.95rem]">
                  People with ADHD often experience intense emotions that can
                  derail their entire day. Small setbacks like missing a
                  deadline or forgetting an appointment can trigger overwhelming
                  feelings of shame, frustration, or anxiety. These emotional
                  responses make it hard to bounce back and continue with
                  planned tasks. Traditional productivity apps don't account for
                  these emotional storms, leaving users feeling worse when they
                  can't maintain consistent habits or check off their to-do
                  lists as expected.
                </p>
              </div>
              <div className="bg-gs-lavender rounded-2xl p-5">
                <h3 className="font-nunito font-bold text-gs-plum mb-2">
                  Task transitioning
                </h3>
                <p className="leading-relaxed text-[0.95rem]">
                  Moving from one activity to another is particularly difficult
                  for people with ADHD due to executive function challenges.
                  They might hyperfocus on one task and lose track of time, or
                  struggle to start new activities even when they know what
                  needs to be done. The mental effort required to stop one
                  thing, organize thoughts, and begin something else can feel
                  overwhelming. Existing apps typically present tasks as simple
                  lists, but they don't provide the scaffolding needed to help
                  users transition smoothly between different types of work or
                  activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive analysis */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <ZoomableImage
            src={appsKeyProblems}
            alt="The key needs of ADHD clients and the best existing app for each"
            caption="Key needs of ADHD clients, and the best existing app for each"
          />
          <div>
            <Eyebrow number="03" label="Competitive analysis" />
            <SectionHeading>Competitive Analysis & Design Approach</SectionHeading>
            <p className="mb-2 leading-relaxed">
              I then performed a competitive analysis, by analyzing all of the
              recommended emotional regulation and task transitioning apps
              provided by the coach as a reference to her clients, answering the
              following questions:
            </p>
            <ul className="list-disc marker:text-gs-octo ml-5 mb-4 space-y-1 leading-relaxed">
              <li>
                Is the app easy to navigate? How quickly can a new user become
                familiar with the app – is there a significant learning curve?
              </li>
              <li>
                Can users complete tasks efficiently without unnecessary steps,
                and can they customize their experience as per their own
                preferences?
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
            <p className="mb-4 leading-relaxed">
              You can read my{" "}
              <TextLink href={ANALYSIS_URL}>
                app analysis and curated product insights
              </TextLink>
              .
            </p>
            <p className="leading-relaxed">
              No single app covered every need: Mindshift led on emotional
              regulation, Fabulous on transitions, Loop on tracking and TimeTune
              on time management. That set the design goal: one planning app
              whose UX matches how people with ADHD communicate emotionally,
              with simple cues to help them switch between tasks.
            </p>
          </div>
        </section>

        {/* User journey */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="md:sticky md:top-8">
            <ZoomableImage
              src={userJourney}
              alt="User journey: five stages of task management and how Go Sparkle supports each"
              caption="The five stages of the user journey"
            />
          </div>
          <div>
            <Eyebrow number="04" label="User journey" />
            <SectionHeading>User Journey Mapping</SectionHeading>
            <ol className="space-y-6">
              {journeyStages.map((stage, i) => (
                <li key={stage.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gs-lilac text-gs-purple font-nunito font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-nunito font-bold text-lg text-gs-plum mb-1">
                      {stage.title}
                    </h3>
                    <p className="leading-relaxed mb-3">{stage.body}</p>
                    <blockquote className="bg-white rounded-xl border-l-4 border-gs-octo shadow-sm px-5 py-4">
                      <p className="italic text-gray-800">"{stage.quote}"</p>
                      <footer className="font-nunito text-sm text-gray-500 mt-2">
                        — ADHD coach
                      </footer>
                    </blockquote>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Design decisions */}
        <section>
          <div className="max-w-3xl mb-8">
            <Eyebrow number="05" label="Design decisions" />
            <SectionHeading>Key design decisions</SectionHeading>
            <p className="leading-relaxed">
              Each screen in the redesign answers one of the research problems.
              These are the calls that shaped it.
            </p>
          </div>
          <DecisionGrid
            decisions={decisions}
            cardClassName="bg-gs-lavender text-gs-plum"
            numberClassName="bg-white text-gs-purple ring-1 ring-gs-octo/30"
          />
        </section>
      </div>

      {/* Clickable prototype */}
      <FullBleed className="bg-gradient-to-b from-gs-cream via-gs-lavender to-gs-cream">
        <div
          id="prototype"
          className="max-w-[68rem] mx-auto px-8 py-16 grid md:grid-cols-[1fr_auto] gap-12 items-center scroll-mt-8"
        >
          <div>
            <Eyebrow number="06" label="Prototype" />
            <SectionHeading>Click through Go Sparkle</SectionHeading>
            <p className="leading-relaxed mb-6">
              This is the live Figma prototype. Tap the buttons on the phone to
              move between screens, just as you would in the app. Here's a
              path to try:
            </p>
            <ol className="space-y-3 mb-8">
              {prototypeTour.map((step, i) => (
                <li key={step} className="flex items-center gap-3 font-nunito text-gs-plum">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white ring-1 ring-gs-octo/30 text-gs-purple text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <ButtonLink href={PROTOTYPE_URL}>Open full screen in Figma ↗</ButtonLink>
          </div>
          <div className="w-full max-w-[400px] mx-auto">
            <iframe
              title="Go Sparkle clickable Figma prototype"
              src={PROTOTYPE_EMBED_URL}
              className="w-full h-[760px] rounded-[2rem] bg-white shadow-xl ring-1 ring-gs-plum/10"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </FullBleed>

      <div className="max-w-5xl mx-auto py-16 space-y-20">
        {/* Process + status */}
        <section className="max-w-3xl mx-auto text-center">
          <Eyebrow number="07" label="Process & status" />
          <SectionHeading>Prototyping with a co-designer</SectionHeading>
          <p className="leading-relaxed mb-4">
            The prototype evolved through several iteration cycles, each aimed
            at a specific challenge ADHD users face. We started with
            low-fidelity wireframes and concept sketches to test interaction
            patterns, then explored different ways to enter tasks and receive
            guidance, testing whether traditional menus or more fluid,
            conversational approaches worked better for our users.
          </p>
          <p className="leading-relaxed mb-8">
            We adopted co-design approaches with the ADHD coach that treated her
            as a collaborator rather than just a test subject. We prioritized
            involving her in brainstorming sessions and prototype refinement
            discussions. She helped us understand which features felt supportive
            versus overwhelming, where AI could be used as a motivator, and how
            AI could be used to re-engage or inspire a user to pursue their
            goals in a manageable way.
          </p>
          <div className="inline-block bg-gs-lavender rounded-2xl px-6 py-4 font-nunito text-gs-plum">
            <span className="font-bold">Now:</span> starting beta testing for
            the mobile app. Once it hits our target metrics, it heads to the App
            Store and Google Play.
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="text-center mb-8">
            <Eyebrow number="08" label="Gallery" />
            <SectionHeading>Screens from the redesign</SectionHeading>
          </div>
          <GallerySlider
            slides={screens}
            label="Go Sparkle screens"
            theme="sparkle"
            imageClassName="block h-[34rem] w-auto mx-auto rounded-[2rem] ring-1 ring-gs-plum/10"
          />
        </section>
      </div>
    </div>
  );
};

export default SparkleMain;
