import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { LayoutGrid, User, Briefcase, Mail, Home } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass px-6 py-3 rounded-full flex items-center gap-8"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative group flex flex-col items-center gap-1 transition-colors",
                isActive ? "text-glitch-blue" : "text-white/50 hover:text-white"
              )}
            >
              <Icon size={20} />
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-dark-bg/80 px-2 py-1 rounded border border-white/10">
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-glitch-blue neon-border"
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
