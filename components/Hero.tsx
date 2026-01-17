"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Brush, Palette, Layers, PenTool, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <Section id="home" className="flex items-center min-h-screen pt-20 relative overflow-hidden">
            
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gray-900">
                {/* Subtle diagonal lines */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="1" height="20" fill="#fff" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#diagonal)" />
                    </svg>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-gray-700" />
                <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-gray-700" />
            </div>

            <Container className="relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Name/Title */}
                    <div className="relative inline-block mb-12">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-white" />
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black tracking-tight text-white"
                        >
                            VIKHASH'S
                        </motion.h1>
                    </div>

                    {/* Portfolio Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-blue-300 tracking-tighter leading-none">
                            PORTFOLIO
                        </h2>
                    </motion.div>

                    {/* Role/Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-20"
                    >
                       

                        <div className="relative inline-block">
                            
                            <span className="text-xl md:text-2xl text-white font-semibold">
                                
                                Graphic Designer
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
                    >
                        {[
                            { icon: <Palette className="text-white" />, label: "UI Design" },
                            { icon: <Layers className="text-white" />, label: "Web Design" },
                            { icon: <PenTool className="text-white" />, label: "Illustration" },
                            { icon: <Sparkles className="text-white" />, label: "Branding" }
                        ].map((skill, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white">
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-bold text-white">{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-0.5 bg-white mx-auto mb-12"
                    />
                </div>

                {/* Corner Text */}
                <div className="absolute top-8 left-8 hidden lg:block">
                    <div className="text-sm text-white font-semibold tracking-widest rotate-90 origin-left">
                        DESIGNER
                    </div>
                </div>

                <div className="absolute top-8 right-8 hidden lg:block">
                    <div className="text-sm text-pink font-semibold tracking-widest -rotate-90 origin-right">
                        PORTFOLIO 2026
                    </div>
                </div>
            </Container>
        </Section>
    );
}
