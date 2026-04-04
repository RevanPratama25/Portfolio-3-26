import { motion, AnimatePresence } from "motion/react";
import { Award, X, ZoomIn } from "lucide-react";
import { useState } from "react";

// Image paths from public root
const projectEnterprise = "/project-enterprise.png";
const projectMtcna = "/project-mtcna.png";
const projectSuperlab = "/project-superlab.png";
const certMtcna = "/cert-mtcna.jpeg";
const certMtcre = "/cert-mtcre.jpeg";
const certVm = "/cert-vm.jpeg";
const certToefl = "/cert-toefl.jpeg";

const projects = [
  {
    title: "ENTERPRISE NETWORK DESIGN",
    category: "Infrastructure",
    image: projectEnterprise,
    description: "Designing a scalable corporate network using Cisco hierarchical models with redundant links and high availability.",
    tags: ["Cisco", "VLAN", "OSPF"],
  },
  {
    title: "Book MTCNA",
    category: "Network Management",
    image: projectMtcna,
    description: "A comprehensive guide and lab workbook for mastering MikroTik Certified Network Associate concepts and configurations.",
    tags: ["MikroTik", "RADIUS", "Queue Tree"],
  },
  {
    title: "Book SUPERLAB",
    category: "Security",
    image: projectSuperlab,
    description: "Advanced network security and routing scenarios designed for hands-on practice in a virtualized environment.",
    tags: ["IPsec", "Firewall", "Tunneling"],
  },
];

const certificates = [
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTikls SIA",
    date: "2025",
    image: certMtcna,
  },
  {
    title: "MikroTik Certified Routing Engineer (MTCRE)",
    issuer: "MikroTikls SIA",
    date: "2025",
    image: certMtcre,
  },
  {
    title: "Virtual Machine Fundamental",
    issuer: "Aguna Course",
    date: "2026",
    image: certVm,
  },
  {
    title: "English Proficiency Test (TOEFL) - Score 537",
    issuer: "Brighten English",
    date: "2025",
    image: certToefl,
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-white/10 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-twilight-plum/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Projects Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            SELECTED <br />
            <span className="text-twilight-plum neon-text">WORKS</span>
          </h2>
          <p className="text-white/50 max-w-md">
            A collection of projects where I push the boundaries of what's possible on the web.
          </p>
        </div>
        <div className="flex gap-4">
          <span className="px-4 py-2 rounded-full glass text-xs font-mono">ALL PROJECTS (3)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-40">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div 
              className="relative aspect-[4/3] overflow-hidden rounded-[32px] mb-6 glass cursor-zoom-in group/img"
              onClick={() => setSelectedImage(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/20">
                <div className="p-4 rounded-full glass">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-glitch-blue text-[10px] font-mono tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-glitch-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          HONORS & <br />
          <span className="text-glitch-blue neon-text">CERTIFICATES</span>
        </h2>
        <p className="text-white/50 max-w-md">
          Recognition of my continuous learning and professional growth.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-4 rounded-3xl group hover:border-glitch-blue/50 transition-colors cursor-zoom-in"
            onClick={() => setSelectedImage(cert.image)}
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <Award className="text-glitch-blue" size={32} />
              </div>
            </div>
            <h3 className="text-sm font-display font-bold mb-1 truncate">{cert.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-mono text-white/40 uppercase">{cert.issuer}</p>
              <p className="text-[10px] font-mono text-glitch-blue">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
