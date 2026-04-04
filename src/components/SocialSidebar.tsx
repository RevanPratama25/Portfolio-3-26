import { motion } from "motion/react";
import { Instagram, MessageCircle, Linkedin } from "lucide-react";

export default function SocialSidebar() {
  const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/shafiqalfaris?igsh=MWl5Zm8zanVwanJ3aQ==", label: "Instagram" },
    { Icon: MessageCircle, href: "https://wa.me/6282297512676", label: "WhatsApp" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-syafiq-al-faris-a9ba16333?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
    >
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: -10, color: '#00f2ff' }}
          className="p-3 rounded-full glass text-white/50 hover:text-glitch-blue transition-all duration-300 group relative"
        >
          <social.Icon size={20} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-glitch-blue text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
      <div className="w-[1px] h-20 bg-gradient-to-b from-glitch-blue/50 to-transparent mx-auto mt-2" />
    </motion.div>
  );
}
