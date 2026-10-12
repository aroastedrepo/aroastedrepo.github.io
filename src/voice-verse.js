import React from "react";
import {
  FullBleed,
  GallerySlider,
  ZoomableImage,
  DecisionGrid,
  starfield,
} from "./case-study-components";
import alexUserProfile from "./images/alex_user_profile_vv.png";
import arianaUserProfile from "./images/ariana_user_profile_vv.png";
import mindMap from "./images/mind_map_vv.png";
import problemsSolutionsBoard from "./images/problems_solutions_board.png";
import vvLogin from "./images/voice_verse/vv_login.png";
import vvEssayTopicAddition from "./images/voice_verse/vv_essay_topic_addition.png";
import vvConversationalAi from "./images/voice_verse/vv_conversational_ai.png";
import vvFactualSpaceshipGame from "./images/voice_verse/vv_factual_spaceship_game.png";
import vvGoogleScholarFillins from "./images/voice_verse/vv_google_scholar_fillins.webp";

const V1_URL = "https://voice-verse-v1.web.app/";
const V2_URL = "https://voice-verse-v2.web.app/";


const gallerySlides = [
  {
    src: vvLogin,
    alt: "Voice Verse login screen where students enter a callsign and choose the Cadet or Captain path",
    caption: "Log in with a callsign and pick a path: step-by-step Cadet or freer Captain.",
  },
  {
    src: vvEssayTopicAddition,
    alt: "Voice Verse essay topic screen where students lock in their mission topic",
    caption: "Lock in an essay topic to kick off the mission.",
  },
  {
    src: vvConversationalAi,
    alt: "Voice Verse mission briefing chat where a robot asks questions to build the essay directive",
    caption: "A conversational AI asks guiding questions to shape the thesis.",
  },
  {
    src: vvFactualSpaceshipGame,
    alt: "Voice Verse asteroid belt game where students fly into relevant evidence and dodge off-topic phrases",
    caption: "Fly into relevant evidence and dodge the junk in a spaceship game.",
  },
  {
    src: vvGoogleScholarFillins,
    alt: "Voice Verse research step with Google Scholar search, stat entry, and citation fields",
    caption: "Search Google Scholar, add a stat, and auto-fill the citation.",
  },
];

const decisions = [
  {
    title: "Scaffold the thinking, never ghostwrite",
    body: "In the Mission Briefing, a robot guide asks four questions and students answer each one in their own words. The AI never drafts a sentence, a direct response to teachers' concern that v1 reinforced learned helplessness.",
  },
  {
    title: "One small task per screen",
    body: "Building a thesis takes four steps, Pick a Side, Give a Reason, Name Evidence and Lock In Thesis, and each screen asks for exactly one. Teachers said this pacing is what lets students who stall after the introduction finish full essays.",
  },
  {
    title: "Let students choose their level of support",
    body: "Cadet gives step-by-step guidance, one sentence at a time; Captain gives more freedom, with templates and tools on demand. This answers the teachers' ask for an interface that adapts to different learning styles.",
  },
  {
    title: "Make the hard parts feel like play",
    body: "Sorting evidence becomes an asteroid-belt game: steer the ship into phrases that support your thesis and dodge off-topic junk like \"Chocolate cake is a favorite dessert for many celebrations.\" Earning XP moves students up from Space Cadet to Junior Pilot to Navigator.",
  },
  {
    title: "Ground every claim in real sources",
    body: "Students write their own search keywords (a topic, a group and an outcome), search Google Scholar, then paste or say the stat they found. Voice Verse auto-fills the author and year from the article title, so every statistic is cited.",
  },
  {
    title: "Design and build in one loop",
    body: "As the sole designer and developer, I shipped both versions as live web apps, so teacher feedback became working builds students could test, not static mockups.",
  },
];

const facts = [
  { label: "Role", value: "Sole designer & developer" },
  { label: "Users", value: "High schoolers (14–18) with ADHD" },
  { label: "Partners", value: "Two special education teachers" },
  { label: "Status", value: "Beta testing in NJ & VA" },
];

const Eyebrow = ({ number, label, dark = false }) => (
  <p
    className={`font-nunito text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
      dark ? "text-vv-cyan" : "text-vv-link"
    }`}
  >
    {number} — {label}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-3xl font-bold font-nunito text-vv-space mb-5">
    {children}
  </h2>
);

const TextLink = ({ href, children }) => (
  <a
    href={href}
    className="text-vv-link underline decoration-vv-cyan decoration-2 underline-offset-2 hover:decoration-vv-link"
  >
    {children}
  </a>
);

const ButtonLink = ({ href, children, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`inline-block font-nunito font-bold text-sm tracking-wide px-5 py-3 rounded-lg transition-colors ${
      primary
        ? "bg-vv-cyan text-vv-space hover:bg-white"
        : "border-2 border-vv-cyan text-vv-cyan hover:bg-vv-cyan hover:text-vv-space"
    }`}
  >
    {children}
  </a>
);

const Quote = ({ children, tone }) => (
  <blockquote
    className={`bg-white rounded-lg border-l-4 shadow-sm px-5 py-4 mb-4 ${
      tone === "before" ? "border-vv-orange" : "border-vv-green"
    }`}
  >
    <p className="font-lora italic text-gray-800">{children}</p>
    <footer className="font-nunito text-sm text-gray-500 mt-2">
      — High school English teacher
    </footer>
  </blockquote>
);

const FeedbackLabel = ({ tone, children }) => (
  <p className="font-nunito text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-3 flex items-center gap-2">
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${
        tone === "before" ? "bg-vv-orange" : "bg-vv-green"
      }`}
    />
    {children}
  </p>
);

const VoiceVerseMain = () => {
  return (
    <div className="font-lora text-gray-800 pb-0">
      {/* Hero */}
      <FullBleed className="bg-vv-space text-white mt-8" style={starfield}>
        <div className="max-w-[68rem] mx-auto px-8 py-16 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow number="Case study" label="Conversational AI" dark />
            <h1 className="font-pixel text-vv-cyan text-3xl md:text-4xl leading-tight mb-6">
              Voice Verse
            </h1>
            <p className="font-nunito text-xl md:text-2xl leading-snug text-slate-100 mb-8">
              A conversational AI that helps neurodivergent students write
              better, one guided question at a time.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={V2_URL} primary>
                Try the latest version
              </ButtonLink>
              <ButtonLink href={V1_URL}>Try v1</ButtonLink>
            </div>
          </div>
          <img
            src={vvLogin}
            alt="Voice Verse login screen with a pixel-art astronaut"
            className="w-full max-w-sm mx-auto rounded-xl ring-1 ring-vv-line shadow-[0_0_60px_rgba(97,210,250,0.15)]"
          />
        </div>
        <div className="border-t border-vv-line bg-vv-panel/80">
          <dl className="max-w-[68rem] mx-auto px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-nunito text-xs font-bold tracking-[0.2em] uppercase text-vv-cyan mb-1">
                  {fact.label}
                </dt>
                <dd className="font-nunito text-sm text-slate-200">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FullBleed>

      <div className="max-w-5xl mx-auto py-16 space-y-20">
        {/* Background */}
        <section className="max-w-3xl">
          <Eyebrow number="01" label="Background" />
          <SectionHeading>Why I built it</SectionHeading>
          <p className="mb-4 leading-relaxed">
            Voice Verse was born from my lived experiences as an English tutor
            for neurodivergent students. One of my students continuously
            expressed how tough it was to translate his thoughts into written
            words on paper – the process of structuring them into coherent
            sentences was a major challenge. We played around with several
            speech to text tools, but couldn't find one that scaffolded him
            through the essay writing process.
          </p>
          <p className="leading-relaxed">
            Realizing this was a common need for neurodivergent students,
            especially those with ADHD, I ran discovery the way I would on any
            product: I read the research, cold emailed 50+ high school special
            education teachers, and turned their feedback into a product
            requirements doc. Two of those teachers became long-term design
            partners. They shaped every iteration and volunteered to run beta
            tests with their students.
          </p>
        </section>

        {/* Research */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <ZoomableImage
              overlayClassName="bg-vv-space/90"
              src={alexUserProfile}
              alt="User profile showing Alex, a high school student with ADHD"
              caption="Alex — high school student with ADHD"
            />
            <ZoomableImage
              overlayClassName="bg-vv-space/90"
              src={arianaUserProfile}
              alt="User profile showing Ariana, a high school student with writing anxiety"
              caption="Ariana — student with writing anxiety"
            />
          </div>
          <div>
            <Eyebrow number="02" label="Research" />
            <SectionHeading>User Research & Target Audience</SectionHeading>
            <p className="mb-4 leading-relaxed">
              Prior to starting the design process, it was crucial to determine
              our specific user base. We focused on US high school students aged
              14-18 with ADHD as our main group, drawing from my tutoring
              experience with their challenges in English courses.
            </p>
            <p className="mb-2 leading-relaxed">
              Our research identified several key challenges for this group:
            </p>
            <ul className="list-disc marker:text-vv-cyan ml-5 mb-4 space-y-1 leading-relaxed">
              <li>
                Difficulties with essay structure, particularly organizing
                sentences into cohesive paragraphs
              </li>
              <li>
                Writing anxiety – freezing when faced with ambiguous essay
                prompts
              </li>
              <li>
                Trouble meeting assignment deadlines due to challenges with time
                management
              </li>
            </ul>
            <p className="leading-relaxed">
              The teachers we partnered with emphasized the need for an
              interface that was engaging yet not overwhelming, supportive
              without being patronizing, and adaptive to different learning
              styles.
            </p>
          </div>
        </section>

        {/* Ideation */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <ZoomableImage
              overlayClassName="bg-vv-space/90"
            src={mindMap}
            alt="Mind map from the ideation phase exploring conversational AI for neurodivergent communication"
            caption="Mind map from the ideation phase"
          />
          <div>
            <Eyebrow number="03" label="Ideation" />
            <SectionHeading>Initial Ideation & Design Process</SectionHeading>
            <p className="mb-4 leading-relaxed">
              As the sole developer and designer, I began the ideation phase
              with{" "}
              <TextLink href="https://itk.mitre.org/">
                MITRE's Innovation Toolkit methodologies
              </TextLink>
              . I started off with the Mindmapping Exercise, where I took the
              main topic as{" "}
              <i>Conversational AI for neurodivergent communication</i>, and
              listed out all thoughts, questions and concerns I had.
            </p>
            <p className="mb-4 leading-relaxed">
              Pairing research papers with conversations with English and
              special education teachers gave me a clear picture of three
              things: what conversational AI can and can't reliably do, the
              UI/UX considerations that drive adoption in the neurodivergent
              community, and how AI can sense when a student needs support
              without taking over.
            </p>
            <p className="mb-2 leading-relaxed">
              I focused on 5 key questions through the Problem Framing Exercise:
            </p>
            <ul className="list-disc marker:text-vv-cyan ml-5 space-y-1 leading-relaxed">
              <li>How do ADHD-specific challenges manifest in writing tasks?</li>
              <li>
                How can conversational AI adapt to ADHD students' unique
                attention-based needs?
              </li>
              <li>How can AI provide structure without being overly rigid?</li>
              <li>
                How can the system support development of self-regulation
                strategies?
              </li>
              <li>
                What classroom ecosystem changes are needed to accommodate ADHD
                students?
              </li>
            </ul>
          </div>
        </section>

        {/* Prototyping */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="md:sticky md:top-8">
            <ZoomableImage
              overlayClassName="bg-vv-space/90"
              src={problemsSolutionsBoard}
              alt="Problems and solutions board: learned helplessness and academic ghostwriting, solved by scaffolding and guided questions"
              caption="Problems (orange) and solutions (green) from teacher interviews"
            />
          </div>
          <div>
            <Eyebrow number="04" label="Iteration" />
            <SectionHeading>User Interviews & Iterative Prototyping</SectionHeading>
            <p className="mb-6 leading-relaxed">
              My first prototype bet on efficiency. From a single-word topic and
              answers to a few questions, it generated an entire essay outline,
              asked a few follow-up questions, and then drafted full paragraphs
              that students could accept or edit. Students could produce
              polished-looking papers quickly, so I put it in front of the
              teachers to test that bet.
            </p>

            <FeedbackLabel tone="before">Prototype 1 — teacher feedback</FeedbackLabel>
            <Quote tone="before">
              "My biggest concern was that students stopped engaging with the
              actual writing process. They'd input minimal information and
              expect the AI to do everything else. It reinforced their learned
              helplessness rather than building the executive functioning
              skills they desperately need."
            </Quote>
            <Quote tone="before">
              "The writing quality was impressive, but it felt like academic
              ghostwriting. How do I assess a student's understanding when the
              AI generated most of the content? It also created this false
              confidence in students — they thought they were better writers
              than they actually were because the output looked so
              professional."
            </Quote>

            <p className="my-6 leading-relaxed">
              The feedback reframed the problem: the AI shouldn't write for
              students, it should help them think. The second iteration broke
              essay writing into discrete prompts that guide students through
              each stage, especially the sequences that matter most, like the
              thesis statement and topic sentences. I removed static outlines
              and full-paragraph generation, and rebuilt the experience as a
              space mission: students earn XP, level up, and work through each
              step with a robot guide. Now the AI asks
              targeted questions like "What's one specific example that
              supports your main idea, and why?" or "How does this connect to
              what you discussed in your previous paragraph?" Students get
              structure, but the ideas and the words are their own.
            </p>

            <FeedbackLabel tone="after">Prototype 2 — teacher feedback</FeedbackLabel>
            <Quote tone="after">
              "This feels like having a writing coach sitting next to each
              student. The prompts helped them organize their thoughts without
              doing the thinking for them. This would help students who usually
              freeze up during writing."
            </Quote>
            <Quote tone="after">
              "The pacing is much better suited for ADHD students. Instead of
              overwhelming them with a blank page, it gives them one manageable
              task at a time. Students who normally give up after the
              introduction will be able to complete full essays."
            </Quote>
          </div>
        </section>

        {/* Design decisions */}
        <section>
          <div className="max-w-3xl mb-8">
            <Eyebrow number="05" label="Design decisions" />
            <SectionHeading>Key design decisions</SectionHeading>
            <p className="leading-relaxed">
              Each decision traces back to something students or teachers told
              me, and each one shows up in the shipped product.
            </p>
          </div>
          <DecisionGrid
            decisions={decisions}
            cardClassName="bg-white ring-1 ring-black/5 shadow-sm text-gray-800"
            numberClassName="bg-vv-space text-vv-cyan"
          />
        </section>
      </div>

      {/* Status + gallery */}
      <FullBleed className="bg-vv-space text-white" style={starfield}>
        <div className="max-w-[68rem] mx-auto px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow number="06" label="Current status" dark />
            <h2 className="text-3xl font-bold font-nunito mb-4">
              In beta with high schools in NJ & VA
            </h2>
            <p className="font-nunito text-slate-300 mb-8">
              The most recent version is still pending edits, but both versions
              are live to try.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonLink href={V2_URL} primary>
                Try the latest version
              </ButtonLink>
              <ButtonLink href={V1_URL}>Try v1</ButtonLink>
            </div>
          </div>

          <h3 className="font-pixel text-vv-cyan text-lg text-center mb-8">
            Gallery
          </h3>
          <GallerySlider slides={gallerySlides} label="Voice Verse gallery" />
        </div>
      </FullBleed>
    </div>
  );
};

export default VoiceVerseMain;
