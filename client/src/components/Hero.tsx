import { motion } from "framer-motion";
import { ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import riteshPhoto from "@assets/Ritesh-Professional_1772295392107.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Physics Educator & AI Innovator
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight text-balance">
              Transforming how <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                students learn Physics.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              20+ years of educational excellence. Former HOD at Resonance, founder of successful institutes, now building AI-powered tools that make conceptual mastery accessible to every aspirant.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-base h-14" asChild>
                <a href="#contact">
                  Let's Connect <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto h-14 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white" asChild>
                <a href="https://www.youtube.com/@PhysicsByRitesh" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 w-5 h-5 text-red-500" />
                  Watch on YouTube
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 border border-zinc-800 rounded-full scale-105" />
              <div className="absolute inset-0 border border-zinc-800/50 rounded-full scale-110" />
              
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl relative bg-zinc-800">
                {/* Professional portrait */}
                <img 
                  src={riteshPhoto} 
                  alt="Ritesh Agarwal" 
                  className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-4 -left-8 sm:left-0 bg-white text-zinc-900 px-6 py-3 rounded-2xl shadow-xl font-medium flex items-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase">Alumnus</div>
                  <div className="text-sm font-bold">IIT Bombay</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
