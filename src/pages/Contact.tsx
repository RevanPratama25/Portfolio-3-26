import { motion } from "motion/react";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-40 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            LET'S BUILD <br />
            <span className="text-glitch-blue neon-text">SOMETHING</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-md">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to new collaborations.
          </p>

          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email", value: "revanpratama434@gmail.com" },
              { icon: MapPin, label: "Location", value: "Cileungsi, Bogor" },
              { icon: Phone, label: "Phone", value: "+62 896 5280 9744" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-4 rounded-2xl glass text-glitch-blue">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{item.label}</p>
                  <p className="text-lg font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-twilight-plum/5 blur-[100px]" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/50 uppercase tracking-widest ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-glitch-blue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/50 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-glitch-blue transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/50 uppercase tracking-widest ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-glitch-blue transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-white/50 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-glitch-blue transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
