"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const skills = [
    { category: "Design", items: ["Figma", "Canva", "Photoshop", "Illustrator", "Framer", "CorelDraw"] },
    { category: "Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "SQL"] },
    { category: "DevOps & Cloud", items: ["AWS (EC2, S3, RDS)", "DevOps Tools"] },
];

export function Skills() {
    return (
        <Section id="skills" className="relative">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-secondary">Skills</span></h2>
                    <p className="text-gray-400">A comprehensive toolkit for designing and building digital products.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-secondary transition-colors">{cat.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-secondary/50 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
