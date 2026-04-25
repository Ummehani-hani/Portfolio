import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS } from '../constants';

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDialog: React.FC<ResumeDialogProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
          />
          
          {/* Resume Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 bg-white text-gray-900 z-[101] rounded-xl overflow-hidden flex flex-col shadow-2xl max-w-4xl mx-auto"
          >
            {/* Header / Toolbar */}
            <div className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Resume_Hani.pdf</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={onClose}
                  className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0">
              <div className="max-w-[800px] mx-auto bg-white">
                {/* Name & Title */}
                <header className="border-b-2 border-gray-900 pb-8 mb-8">
                  <h1 className="text-4xl font-black uppercase tracking-tight mb-2">{PERSONAL_INFO.name}</h1>
                  <h2 className="text-xl text-gray-600 font-bold tracking-wide">{PERSONAL_INFO.title}</h2>
                  
                  <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> {PERSONAL_INFO.email}</div>
                    <div className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> {PERSONAL_INFO.phone}</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {PERSONAL_INFO.location}</div>
                  </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-10">
                    {/* Summary */}
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-gray-200" /> Summary
                      </h3>
                      <p className="text-gray-600 leading-relaxed italic">
                        "{PERSONAL_INFO.summary}"
                      </p>
                    </section>

                    {/* Experience */}
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-gray-200" /> Experience
                      </h3>
                      <div className="space-y-8">
                        {EXPERIENCE.map((exp, i) => (
                          <div key={i}>
                            <div className="flex justify-between items-baseline mb-2">
                              <h4 className="font-bold text-lg">{exp.role}</h4>
                              <span className="text-xs font-bold text-gray-400 uppercase">{exp.period}</span>
                            </div>
                            <p className="text-blue-600 font-bold text-sm mb-3">{exp.company}</p>
                            <ul className="space-y-2">
                              {exp.points.map((point, j) => (
                                <li key={j} className="text-sm text-gray-600 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-10">
                    {/* Skills */}
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-gray-200" /> Core Skills
                      </h3>
                      <div className="space-y-6">
                        {SKILLS.map((group, i) => (
                          <div key={i}>
                            <h4 className="text-[10px] font-black uppercase text-gray-900 mb-2">{group.category}</h4>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((skill, j) => (
                                <span key={j} className="text-[10px] font-bold border border-gray-200 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Education */}
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-gray-200" /> Education
                      </h3>
                      {EDUCATION.map((edu, i) => (
                        <div key={i} className="mb-4">
                          <h4 className="font-bold text-sm">{edu.degree}</h4>
                          <p className="text-xs text-gray-500 font-bold">{edu.school}</p>
                          <p className="text-[10px] text-gray-400 uppercase mt-1">{edu.period}</p>
                        </div>
                      ))}
                    </section>

                    {/* Certs */}
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-gray-200" /> Certifications
                      </h3>
                      <div className="space-y-3">
                        {CERTIFICATIONS.map((cert, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-xs">{cert.title}</h4>
                            <p className="text-[10px] text-gray-400 uppercase italic">{cert.issuer}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
