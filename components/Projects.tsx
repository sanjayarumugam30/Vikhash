"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Home, Cpu } from "lucide-react";

const projects = [
    {
        title: "Zillo - Real Estate",
        category: "UI/UX Design",
        year: "2024",
        description: "Designed a real estate website using Figma focusing on creating a visually appealing and user-friendly interface.",
        tags: ["Figma", "UI/UX", "Prototyping"],
        icon: <Home size={24} className="text-secondary" />,
        gradient: "from-blue-500/20 to-cyan-500/5",
    },
    {
        title: "Erect Layers",
        category: "Full Stack Web",
        year: "2024",
        description: "Created a sleek and responsive e-commerce website for men's fashion using React.js. Designed UI in Figma.",
        tags: ["React.js", "Figma", "E-commerce"],
        icon: <Layers size={24} className="text-purple-400" />,
        gradient: "from-purple-500/20 to-pink-500/5",
    },
    {
        title: "Milestone Promoters",
        category: "CMS Development",
        year: "2024",
        description: "Built a platform to simplify finding suitable builders using HTML, CSS, and JS. Integrated detailed builder profiles.",
        tags: ["HTML", "CSS", "JS", "CMS"],
        icon: <Home size={24} className="text-emerald-400" />,
        gradient: "from-emerald-500/20 to-teal-500/5",
    },
    {
        title: "Automatic Pet Feeder",
        category: "IoT Solution",
        year: "2024",
        description: "IoT-based automatic pet feeder using NodeMCU and Blynk. Enables remote feeding via internet-connected controls.",
        tags: ["IoT", "NodeMCU", "Blynk", "C++"],
        icon: <Cpu size={24} className="text-orange-400" />,
        gradient: "from-orange-500/20 to-amber-500/5",
    }
];

export function Projects() {
    return (
        <Section id="projects">
            <Container>
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A selection of my recent work in UI/UX Design, Web Development, and IoT.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} border border-white/10 p-1`}
                        >
                            <div className="relative bg-[#050511]/90 backdrop-blur-xl h-full rounded-[20px] p-8 md:p-10 transition-all group-hover:bg-[#050511]/70">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10">{project.icon}</div>
                                    <span className="text-sm font-medium text-gray-500">{project.year}</span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-secondary text-sm font-semibold tracking-wide uppercase">{project.category}</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Action */}
                                <div className="absolute bottom-8 right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
