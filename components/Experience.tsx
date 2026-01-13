"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
    {
        role: "Digital Marketing Executive (Intern)",
        company: "Gessdemn Global Services",
        duration: "2025 (3 Months)",
        description: "Gained practical experience in SEO, social media, and online ads. Helped build strong skills in digital marketing strategies.",
    },
    {
        role: "Full Stack Web Development Intern",
        company: "Electrocloud Labs",
        duration: "2023 (18 Days)",
        description: "Hands-on experience with HTML, CSS, JS, React, Node, SQL, and MongoDB. Successfully completed a project during the internship.",
    },
    {
        role: "AWS & DevOps Intern",
        company: "1CloudHub",
        duration: "2023 (10 Days)",
        description: "Gained knowledge in AWS services (EC2, S3, Lambda, RDS, IAM) and DevOps practices/tools.",
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-white/5">
            <Container>
                <div className="flex flex-col items-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Professional Journey</span>
                    <h2 className="text-4xl font-bold">Work Experience</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#030014] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_-5px_var(--color-primary)]">
                                <Briefcase size={16} className="text-primary" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-[#0a0a1f] border border-white/10 hover:border-primary/30 transition-all shadow-xl">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 whitespace-nowrap">{exp.duration}</span>
                                </div>
                                <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
