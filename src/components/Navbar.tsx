import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const navItems = [
  { name: "Home", path: "/#home" },
  { name: "Experience", path: "/#experience-section" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills-section" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bento-bg/80 backdrop-blur-md border-b border-bento-border"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bento-accent rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block text-white">
              {PERSONAL_INFO.name}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <a 
                  href={item.path} 
                  className="text-sm font-medium transition-colors text-bento-dim hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-bento-border hidden md:block" />

          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-bento-dim hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-bento-dim hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <Link to="/contact" className="bg-bento-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
