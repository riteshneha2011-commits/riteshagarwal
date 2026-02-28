import { motion } from "framer-motion";
import { Brain, Sparkles, BookOpen } from "lucide-react";

export function Expertise() {
  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "JEE & NEET Physics Mastery",
      description: "Conceptual depth, problem-solving frameworks, and exam strategy that consistently deliver top ranks.",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      title: "AI-Powered Education Tools",
      description: "Developing PDF-to-interactive content converters, AI Doubt Solvers, Quiz Portals, and automated subjective exam graders.",
      color: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-violet-600" />,
      title: "Curriculum & Test Design",
      description: "Designed thousands of high-quality study materials and test papers used across multiple premier institutes.",
      color: "bg-violet-50 border-violet-100",
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Expertise & Innovation</h2>
          <p className="text-zinc-500">Blending decades of deep pedagogical experience with cutting-edge artificial intelligence to redefine learning paradigms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{skill.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
