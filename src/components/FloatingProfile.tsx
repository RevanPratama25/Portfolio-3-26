import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const profileImg = "/profile.jpg";

export default function FloatingProfile() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-8 left-8 z-50 flex items-center gap-4 group cursor-pointer"
    >
      <div className="relative">
        {/* Animated Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 rounded-full border border-dashed border-glitch-blue/50 opacity-50"
        />
        
        {/* Profile Image Container */}
        <div className="w-12 h-12 rounded-full glass overflow-hidden border border-white/20 relative z-10">
          <img 
            src={profileImg} 
            alt="Owner" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Online Status Indicator */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-glitch-blue rounded-full border-2 border-dark-bg z-20 neon-border" />
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-display font-bold tracking-tight group-hover:text-glitch-blue transition-colors">
          SYAFIQ
        </span>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          Software Engineer 
        </span>
      </div>

      {/* Hover Card Detail (Optional) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        className="absolute top-full left-0 mt-4 glass p-4 rounded-2xl w-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <p className="text-[10px] text-white/60 leading-relaxed">
          Specializing in creative & Software Engineering | Frontend & Backend.
        </p>
        <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: ["0%", "85%", "85%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full bg-glitch-blue" 
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
