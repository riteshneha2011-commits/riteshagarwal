import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Academic Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">Education & Background</h2>
            
            <div className="bg-zinc-950 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                <GraduationCap className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wide mb-6">
                  2000 – 2004
                </div>
                <h3 className="text-2xl font-bold mb-2">B.Tech – Engineering Physics</h3>
                <p className="text-lg text-zinc-300 mb-6">Indian Institute of Technology Bombay</p>
                
                <div className="flex items-center gap-3 text-sm text-zinc-400 border-t border-white/10 pt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Trophy className="w-4 h-4" />
                  </div>
                  GATE Qualified – Physics
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 lg:pt-16"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Key Milestones</h3>
            
            <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex gap-5 items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900">All India Rank 6</h4>
                <p className="text-zinc-500 text-sm">JEST (Joint Entrance Screening Test) - Physics</p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex gap-5 items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900">All India Rank 1261</h4>
                <p className="text-zinc-500 text-sm">IIT JEE 2000</p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex gap-5 items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900">1000+ Students Mentored</h4>
                <p className="text-zinc-500 text-sm">Guided to IITs, NITs, and top medical colleges</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
