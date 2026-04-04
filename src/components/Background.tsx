import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-bg">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-twilight-plum)_0%,_transparent_70%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-deep-sky)_0%,_transparent_80%)] opacity-20" />

      {/* Aurora Effects */}
      <motion.div 
        className="absolute top-[10%] left-[-20%] w-[70%] h-[40%] bg-glitch-blue/10 blur-[120px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[-10%] w-[60%] h-[50%] bg-milky-glow/15 blur-[150px] rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Radial Gradient following mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(136, 165, 224, 0.05), transparent 40%)`
        }}
      />

      {/* Stardust Particles - Layer 1 (Dense & Small) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0,0,0,0))', backgroundRepeat: 'repeat', backgroundSize: '200px 200px', opacity: 0.8 }} />
      
      {/* Stardust Particles - Layer 2 (Medium & Twinkling) */}
      <motion.div 
        className="absolute inset-0" 
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundImage: 'radial-gradient(1.5px 1.5px at 30px 50px, #c8ddf5, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 120px 150px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 180px 80px, #88a5e0, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 220px 20px, #ffffff, rgba(0,0,0,0))', backgroundRepeat: 'repeat', backgroundSize: '300px 300px' }} 
      />
      
      {/* Stardust Particles - Layer 3 (Large & Slow Twinkle) */}
      <motion.div 
        className="absolute inset-0" 
        animate={{ opacity: [0.1, 0.9, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ backgroundImage: 'radial-gradient(2px 2px at 80px 100px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 250px 250px, #c8ddf5, rgba(0,0,0,0))', backgroundRepeat: 'repeat', backgroundSize: '400px 400px' }} 
      />
    </div>
  );
}
