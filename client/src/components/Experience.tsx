import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    year: "2024–Present",
    role: "Senior Physics Faculty",
    company: "Narayana Junior College, Bhopal",
    description: "Delivering advanced physics curriculum for competitive exams."
  },
  {
    year: "2022–Present",
    role: "Senior Physics Faculty & AI Integration Lead",
    company: "Durrani Academy | Invictus | Olympians",
    description: "Leading physics education and pioneering the integration of AI tools to enhance learning outcomes."
  },
  {
    year: "2017–Present",
    role: "Founder & Director",
    company: "Ritesh Agarwal Classes, Bhopal",
    description: "Founded an independent coaching institution focused on personalized, high-quality physics education."
  },
  {
    year: "2010–2017",
    role: "Founder & HOD Physics",
    company: "Spectrum Institute, Bhopal",
    description: "Built and scaled a premier coaching institute from the ground up, mentoring thousands of students."
  },
  {
    year: "2007–2010",
    role: "Centre Head & HOD Physics",
    company: "Resonance Edventures Ltd., Kota & Bhopal",
    description: "Led the physics department and designed curriculum that produced numerous IIT toppers."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Career Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Professional Journey</h2>
        </motion.div>

        <div className="relative border-l-2 border-zinc-200 ml-4 md:ml-0 md:pl-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-12 relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Mobile Line Dot */}
              <div className="md:hidden absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 shadow-[0_0_0_4px_rgba(255,255,255,1)]" />

              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="hidden md:block md:col-span-1 text-right pt-1 pr-8 relative">
                  <span className="text-sm font-bold text-zinc-400">{exp.year}</span>
                  {/* Desktop Line Dot */}
                  <div className="absolute w-4 h-4 bg-primary rounded-full -right-[9px] top-1.5 shadow-[0_0_0_4px_rgba(244,244,245,1)] z-10" />
                </div>
                
                <div className="md:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
                  <div className="md:hidden text-xs font-bold text-primary mb-2">{exp.year}</div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-zinc-400" />
                    {exp.role}
                  </h3>
                  <div className="text-zinc-500 font-medium mt-1 mb-3">{exp.company}</div>
                  <p className="text-zinc-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
