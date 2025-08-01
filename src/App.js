import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import ProjectsPage from "./Projects";
import spLogo from "./images/sp-logo.png";
import ResumePDF from "./images/Sanjana_Pendharkar_Resume.pdf";
import VoiceVerseMain from "./voice-verse.js";
import SparkleAIMain from "./sparkle-ai.js";
//import JamItMain from "./JamIt.js";
//import TNAMain from "./TNAMain.js";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  return (
    <div className="font-merriweather bg-[#FFFCF9] min-h-screen">
      <header className="max-w-6xl mx-auto pt-8 pb-0 px-8 flex justify-between items-center">
        <Link to="/">
          <img
            src={spLogo}
            alt="Sanjana Pendharkar Logo"
            className="h-20 w-auto mr-10"
          />
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`text-lg font-nunito hover:underline ${
                  location.pathname === "/"
                    ? "underline font-bold"
                    : "font-normal"
                }`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-lg font-nunito hover:underline ${
                  location.pathname === "/projects"
                    ? "underline font-semibold"
                    : "font-light"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-nunito hover:underline font-light"
              >
                Resumé
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/voice-verse" element={<VoiceVerseMain />} />
          <Route path="/sparkle-ai" element={<SparkleAIMain />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
