"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
    {
        school: "Sri Eshwar College of Engineering",
        degree: "Bachelor of Engineering (CCE)",
        duration: "2022 - 2025",
        location: "Coimbatore, India",
    },
    {
        school: "RM Polytechnic College",
        degree: "Diploma in Mechanical Engineering",
        duration: "2019 - 2022",
        location: "Udumalpet, India",
    },
    {
        school: "SKP Higher Secondary School",
        degree: "SSLC",
        duration: "2018 - 2019",
        location: "Udumalpet, India",
    },
];

export function About() {
    return (
        <Section id="about" className="bg-white/5">
            <Container>
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-12 h-0.5 bg-primary"></span>
                            <span className="text-primary font-medium tracking-widest uppercase text-sm">About Me</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-primary">    </span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a creative UI/UX & Graphic Designer with strong skills in Figma, Photoshop, and Canva.
                            Experienced in building intuitive, user-focused web interfaces with a foundation in front-end development.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            My journey involves designing responsive e-commerce websites, real estate platforms, and interactive applications.
                            I am passionate about creating seamless digital experiences that solve real user problems.
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-6">
                            {/* <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <h3 className="text-3xl font-bold text-secondary mb-1">UI/UX</h3>
                                <p className="text-sm text-gray-400">Specialist</p>
                            </div> */}
                            {/* <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <h3 className="text-3xl font-bold text-primary mb-1">Web</h3>
                                <p className="text-sm text-gray-400">Developer</p>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="space-y-6 relative border-l-2 border-white/10 pl-8 ml-3">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute top-1.5 -left-[41px] w-5 h-5 rounded-full bg-black border-4 border-primary" />

                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.school}</h4>
                                        <p className="text-gray-300 font-medium mt-1">{edu.degree}</p>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {edu.duration}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
