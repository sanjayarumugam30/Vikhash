"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Brush, Palette, Layers, PenTool, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <Section id="home" className="flex items-center min-h-screen pt-20 relative overflow-hidden">
            
            {/* Minimal Background */}
            <div className="absolute inset-0 -z-10 bg-white">
                {/* Subtle diagonal lines */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="1" height="20" fill="#000" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#diagonal)" />
                    </svg>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-gray-200" />
                <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-gray-200" />
            </div>

            <Container className="relative">
                {/* Main Content - Centered */}
                <div className="text-center max-w-4xl mx-auto">
                    {/* Name/Title with top border */}
                    <div className="relative inline-block mb-12">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-800" />
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black tracking-tight text-gray-900"
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
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter leading-none">
                            PORTFOLIO
                        </h2>
                    </motion.div>

                    {/* Role/Description with Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-20"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Brush className="w-6 h-6 text-gray-600" />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wider">
                                UI/UX DESIGN
                            </h3>
                            <PenTool className="w-6 h-6 text-gray-600" />
                        </div>
                        
                        <div className="relative inline-block">
                            <span className="text-xl md:text-2xl text-gray-600 font-medium">
                                Graphic Designer
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Featured Skills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
                    >
                        {[
                            { icon: <Palette />, label: "UI Design" },
                            { icon: <Layers />, label: "Web Design" },
                            { icon: <PenTool />, label: "Illustration" },
                            { icon: <Sparkles />, label: "Branding" }
                        ].map((skill, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300">
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-0.5 bg-gray-800 mx-auto mb-12"
                    />
                </div>

                {/* Corner Text Elements */}
                <div className="absolute top-8 left-8 hidden lg:block">
                    <div className="text-sm text-gray-400 tracking-widest rotate-90 origin-left">
                        DESIGNER 
                    </div>
                </div>

                <div className="absolute top-8 right-8 hidden lg:block">
                    <div className="text-sm text-gray-400 tracking-widest -rotate-90 origin-right">
                        PORTFOLIO 2026
                    </div>
                </div>
            </Container>
        </Section>
    );
}