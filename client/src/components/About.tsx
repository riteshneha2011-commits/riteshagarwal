import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight mb-10 text-balance">
            "Teaching with clarity. <br/>
            <span className="font-bold text-primary">Leading with humility.</span>"
          </h2>
          
          <div className="h-px w-24 bg-zinc-200 mx-auto mb-10" />
          
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            My philosophy is deeply rooted in building strong conceptual foundations for JEE and NEET aspirants. Physics isn't just about formulas—it's about understanding the world around us. By merging traditional teaching wisdom with modern AI technologies, I aim to make complex concepts intuitive and accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
