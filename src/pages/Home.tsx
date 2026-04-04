import { motion } from "motion/react";
import { ArrowRight, Instagram, MessageCircle, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32 md:pb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1 rounded-full glass text-glitch-blue text-xs font-mono mb-6 tracking-[0.2em] uppercase"
        >
          Available for new projects
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tighter mb-8 leading-none">
          JUNIOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glitch-blue to-twilight-plum">
            SOFTWARE ENGINEER
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm a software engineer dedicated to building scalable applications, 
          applying design thinking to ensure a seamless and intuitive experience for end-users.
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-3 group shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          {/* Mobile Socials Only */}
          <div className="flex md:hidden items-center gap-6 mt-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/shafiqalfaris?igsh=MWl5Zm8zanVwanJ3aQ==" },
              { Icon: MessageCircle, href: "https://wa.me/6282297512676" },
              { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#00f2ff' }}
                className="p-4 rounded-full glass text-white/70 transition-colors"
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 glass rounded-2xl rotate-12 opacity-20 hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-24 h-24 glass rounded-full opacity-20 hidden lg:block"
      />
    </div>
  );
}
