import { motion } from "motion/react";

const skills = [
  { name: "Development", items: ["JavaScript / TypeScript", "React & Next.js", "Node.js & Express", "REST APIs & GraphQL", "Database Management"] },
  { name: "Soft Skills", items: ["Public Speaking", "English Proficiency", "Team Leadership", "Problem Solving", "Critical Thinking"] },
  { name: "Creative", items: ["Creative Design", "UI/UX Design", "Figma", "Motion Graphics", "Digital Branding"] },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-40 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase">
          BEYOND THE <br />
          <span className="text-glitch-blue neon-text tracking-widest">CODE</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-white/60 text-lg leading-relaxed">
            I'm a Software Engineer with a deep passion for building robust and scalable digital solutions. 
            Specializing in modern web technologies, I bridge the gap between complex backend architectures 
            and seamless user interfaces.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Beyond the technical side, I believe in the power of communication and creative thinking. 
            Whether it's architecting complex systems or crafting intuitive user experiences, 
            I strive to deliver excellence in every layer of the digital experience.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-glitch-blue/5 blur-3xl group-hover:bg-glitch-blue/10 transition-colors" />
            <h3 className="text-xl font-display font-bold mb-6 text-glitch-blue">{skill.name}</h3>
            <ul className="space-y-3">
              {skill.items.map((item) => (
                <li key={item} className="text-white/50 font-mono text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glitch-blue/30" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 glass p-12 rounded-[40px] text-center"
      >
        <h3 className="text-2xl font-display font-bold mb-4">WANT TO KNOW MORE?</h3>
        <p className="text-white/50 mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
          Download Resume
        </button>
      </motion.div>
    </div>
  );
}
