import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomeView, ExperienceView, ProjectsView, SkillsView, ContactView } from "./components/Sections";
import { PERSONAL_INFO } from "./constants";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bento-bg">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </main>
        
        <footer className="pb-10 px-4 text-center">
          <p className="text-xs text-bento-dim font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} • QUALITY ASSURED • {PERSONAL_INFO.name}
          </p>
        </footer>
      </div>
    </Router>
  );
}
