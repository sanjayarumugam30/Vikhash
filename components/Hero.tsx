"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <Section id="home" className="flex items-center min-h-screen pt-20 relatvie">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <Container className="grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide mb-2">
                        ✨ Welcome to my portfolio
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Vikhash KM
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                        UI/UX Designer & <br className="hidden md:block" />
                        Graphic Designer
                    </h2>

                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        Passionate about blending creativity and functionality to deliver engaging digital experiences.
                        Skilled in Figma, Photoshop, and Web Development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-700 hover:border-white text-white font-medium flex items-center justify-center gap-2 transition-all hover:bg-white/5"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Visual Representation since no image provided */}
                    <div className="relative w-full aspect-square rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
                        <div className="absolute inset-4 border border-primary/20 rounded-full animate-spin-slow [animation-direction:reverse]" />
                        <div className="absolute inset-12 border border-secondary/20 rounded-full animate-spin-slow" />

                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-3xl w-64 h-64 rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
                            <span className="text-6xl">🎨</span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
