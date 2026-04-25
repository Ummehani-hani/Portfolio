import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Wrench, 
  FileCheck, 
  Trophy, 
  Award,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Terminal,
  ChevronRight,
  Bug,
  Zap,
  Globe,
  MapPin,
  Download
} from "lucide-react";
import { 
  PERSONAL_INFO, 
  EXPERIENCE, 
  EDUCATION, 
  PROJECTS, 
  SKILLS, 
  AWARDS, 
  CERTIFICATIONS 
} from "../constants";

import { ResumeDialog } from "./ResumeDialog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function ProfileCard({ className }: { className?: string }) {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <>
      <motion.div 
        id="about"
        variants={cardVariants}
        className={`bento-card relative overflow-hidden group scroll-mt-20 flex flex-col justify-between ${className}`}
      >
        <div>
          <div className="w-20 h-20 rounded-full bg-bento-accent mb-6 flex items-center justify-center border-4 border-bento-border shadow-2xl">
            <Bug className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg text-bento-dim leading-relaxed max-w-md">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-bento-border mt-8">
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-extrabold text-bento-accent">BSCS</div>
              <div className="text-[10px] uppercase font-bold text-bento-dim tracking-widest ">Academic Foundation</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-bento-accent">100%</div>
              <div className="text-[10px] uppercase font-bold text-bento-dim tracking-widest ">Quality Focus</div>
            </div>
          </div>
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm font-bold transition-colors text-white cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-bento-accent" />
            View Resume
          </button>
        </div>
      </motion.div>
      
      <ResumeDialog isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export function SkillsCard({ className }: { className?: string }) {
  return (
    <motion.div 
      id="skills"
      variants={cardVariants}
      className={`bento-card scroll-mt-20 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4 text-bento-dim uppercase font-bold tracking-widest text-[10px]">
        <Zap className="w-3 h-3 text-bento-accent" />
        Core Expertise
      </div>
      <div className="flex flex-wrap gap-2">
        {SKILLS.flatMap(s => s.items).map((skill, i) => (
          <span key={i} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export const ProjectCard: React.FC<{ project: typeof PROJECTS[0], className?: string }> = ({ project, className }) => {
  return (
    <motion.div 
      variants={cardVariants}
      className={`bento-card group flex flex-col justify-between h-full transition-transform hover:scale-[1.01] ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-bento-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-bento-dim leading-relaxed mb-6">
          {project.description}
        </p>
      </div>
      <div className="text-[10px] font-mono font-bold text-bento-accent flex items-center justify-between uppercase tracking-wider">
        <span className="bg-bento-accent/10 px-2 py-0.5 rounded">{project.tech}</span>
      </div>
    </motion.div>
  );
}

export function ExperienceCard({ className }: { className?: string }) {
  return (
    <motion.div 
      id="experience"
      variants={cardVariants}
      className={`bento-card scroll-mt-20 bg-bento-accent border-none text-white overflow-hidden relative ${className}`}
    >
      <Globe className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
      <div className="flex flex-col h-full justify-between relative z-10">
        <div>
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Work History</h3>
          <div className="space-y-4 mt-4">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={`border-l-2 pl-4 py-1 transition-colors ${i === 0 ? 'border-white' : 'border-white/30'}`}>
                <p className="text-[10px] font-bold text-white/60 mb-1 tracking-wider uppercase">{exp.period}</p>
                <p className="text-sm font-bold leading-tight mb-0.5">{exp.role}</p>
                <p className="text-xs text-white/80">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsCard({ className, columns = 1 }: { className?: string, columns?: number }) {
  const gridCols = columns === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  
  return (
    <motion.div 
      variants={cardVariants}
      className={`bento-card ${className}`}
    >
      <div className="flex items-center gap-2 mb-6 text-bento-dim uppercase font-bold tracking-widest text-[10px]">
        <Award className="w-3 h-3 text-bento-accent" />
        Certifications
      </div>
      <div className={`grid ${gridCols} gap-6`}>
         {CERTIFICATIONS.map((cert, i) => (
           <div key={i} className="group border-l border-bento-border pl-4 py-1">
             <p className="text-sm font-bold text-white leading-tight group-hover:text-bento-accent transition-colors">{cert.title}</p>
             <p className="text-[10px] text-bento-dim mt-1 font-mono uppercase tracking-wider">{cert.issuer}</p>
           </div>
         ))}
      </div>
    </motion.div>
  );
}

export function EducationCard({ className }: { className?: string }) {
  return (
    <motion.div 
      variants={cardVariants}
      className={`bento-card flex-row items-center gap-8 ${className}`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4 text-bento-dim uppercase font-bold tracking-widest text-[10px]">
          <GraduationCap className="w-3 h-3 text-bento-accent" />
          Education
        </div>
        {EDUCATION.map((edu, i) => (
          <div key={i}>
            <p className="font-bold text-white">{edu.school}</p>
            <p className="text-sm text-bento-dim">{edu.degree}</p>
          </div>
        ))}
      </div>
      <div className="w-px h-12 bg-bento-border hidden md:block" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4 text-bento-dim uppercase font-bold tracking-widest text-[10px]">
          <Trophy className="w-3 h-3 text-bento-accent" />
          Award
        </div>
        {AWARDS.slice(0, 1).map((award, i) => (
           <div key={i}>
             <p className="font-bold text-white leading-tight">{award.title}</p>
             <p className="text-sm text-bento-dim">{award.issuer}</p>
           </div>
        ))}
      </div>
    </motion.div>
  );
}

export function ContactCard({ className }: { className?: string }) {
  return (
    <motion.div 
      id="contact"
      variants={cardVariants}
      className={`bento-card scroll-mt-20 ${className}`}
    >
      <div className="flex items-center gap-2 mb-6 text-bento-dim uppercase font-bold tracking-widest text-[10px]">
        <Mail className="w-3 h-3 text-bento-accent" />
        Connect with me
      </div>
      <div className="space-y-3">
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-bento-accent" />
            <span className="text-sm font-bold text-white">Email</span>
          </div>
          <span className="text-xs text-bento-dim font-mono group-hover:text-white transition-colors">{PERSONAL_INFO.email}</span>
        </a>

        <a 
          href={PERSONAL_INFO.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <Linkedin className="w-4 h-4 text-bento-accent" />
            <span className="text-sm font-bold text-white">LinkedIn</span>
          </div>
          <span className="text-xs text-bento-dim group-hover:text-white transition-colors uppercase tracking-widest font-bold">Profile</span>
        </a>

        <a 
          href={PERSONAL_INFO.github} 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <Github className="w-4 h-4 text-bento-accent" />
            <span className="text-sm font-bold text-white">GitHub</span>
          </div>
          <span className="text-xs text-bento-dim group-hover:text-white transition-colors uppercase tracking-widest font-bold">Codebase</span>
        </a>
      </div>
    </motion.div>
  );
}

export function StatsCard({ className }: { className?: string }) {
  return (
    <motion.div 
      variants={cardVariants}
      className={`bento-card items-center justify-center text-center ${className}`}
    >
      <div className="text-5xl font-black text-bento-accent leading-none mb-2">99%</div>
      <div className="text-[10px] font-bold text-bento-dim uppercase tracking-widest">Test Coverage</div>
    </motion.div>
  );
}

export function HomeView() {
  return (
    <div className="space-y-10">
      <div id="home" className="pt-24 pb-10 px-4 max-w-7xl mx-auto scroll-mt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <ProfileCard className="md:col-span-2 md:row-span-2" />
          <StatsCard className="md:col-span-1 md:row-span-1" />
          <SkillsCard className="md:col-span-1 md:row-span-1" />
          <ContactCard className="md:col-span-2 md:row-span-1" />
        </motion.div>
      </div>
      
      <ExperienceView />
      <ProjectsView />
      <SkillsView />
    </div>
  );
}

export function ExperienceView() {
  return (
    <div id="experience-section" className="pt-10 pb-10 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-2 mb-8 text-bento-dim uppercase font-bold tracking-widest text-xs">
        <Briefcase className="w-4 h-4 text-bento-accent" />
        Experience & Education
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <ExperienceCard className="md:col-span-2 md:row-span-2" />
        <EducationCard className="md:col-span-2 md:row-span-1" />
        <CertificationsCard className="md:col-span-2 md:row-span-1 pb-8" columns={2} />
      </motion.div>
    </div>
  );
}

export function ProjectsView() {
  return (
    <div id="projects" className="pt-10 pb-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-2 mb-8 text-bento-dim uppercase font-bold tracking-widest text-xs">
        <Terminal className="w-4 h-4 text-bento-accent" />
        Projects
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard 
            key={i} 
            project={project} 
            className={i === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-2 md:row-span-1"} 
          />
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsView() {
  return (
    <div id="skills-section" className="pt-10 pb-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-2 mb-8 text-bento-dim uppercase font-bold tracking-widest text-xs">
        <Zap className="w-4 h-4 text-bento-accent" />
        Technical Skills
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <SkillsCard className="md:col-span-4 md:row-span-1 py-12" />
        <CertificationsCard className="md:col-span-2 md:row-span-1" columns={2} />
        <EducationCard className="md:col-span-2 md:row-span-1" />
      </motion.div>
    </div>
  );
}

export function ContactView() {
  return (
    <div id="contact-page" className="pt-32 pb-20 px-4 max-w-xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-2 mb-8 text-bento-dim uppercase font-bold tracking-widest text-xs justify-center">
        <Mail className="w-4 h-4 text-bento-accent" />
        Get In Touch
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <ContactCard className="w-full" />
        
        <motion.div variants={cardVariants} className="bento-card text-center p-8 bg-white/5 border-white/5">
          <p className="text-bento-dim text-sm leading-relaxed mb-8">
            Whether you have a question about my work history, want to discuss a potential collaboration, 
            or just want to say hi, my inbox is always open.
          </p>
          <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5 max-w-xs mx-auto">
            <div className="w-10 h-10 rounded-lg bg-bento-accent/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-bento-accent" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-bento-dim tracking-widest">Location</div>
              <div className="text-sm font-bold text-white">{PERSONAL_INFO.location}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function BentoPortfolio() {
  // We'll keep this as a footer or a combined view if needed, but App.tsx will now use the views above.
  return null;
}
