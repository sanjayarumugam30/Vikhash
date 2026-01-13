"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Code, MousePointer } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Section id="home" className="flex items-center min-h-screen pt-20 relative overflow-hidden">
            
            {/* Interactive Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                                rgba(59, 130, 246, 0.15) 0px, 
                                transparent 50%
                            ),
                            radial-gradient(circle at 30% 20%, 
                                rgba(236, 72, 153, 0.1) 0px, 
                                transparent 50%
                            ),
                            radial-gradient(circle at 70% 80%, 
                                rgba(139, 92, 246, 0.1) 0px, 
                                transparent 50%
                            )
                        `
                    }}
                />
                
                {/* Geometric Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
                    }} />
                </div>

                {/* Floating Elements */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-primary/20"
                        animate={{
                            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                            y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 8}%`,
                        }}
                    />
                ))}
            </div>

            <Container className="grid lg:grid-cols-2 gap-16 items-center relative">
                {/* Left Content - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 relative z-10"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                                   bg-gradient-to-r from-primary/10 to-secondary/10 
                                   border border-white/10 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Crafting Digital Experiences
                        </span>
                    </motion.div>

                    {/* Main Heading with Gradient Text Effect */}
                    <div className="relative">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
                        >
                            <span className="block text-white">DESIGN</span>
                            <span className="block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary 
                                                animate-gradient bg-[length:200%_auto]">
                                    MEETS
                                </span>
                                <span className="text-white ml-4">CODE</span>
                            </span>
                        </motion.h1>
                        
                        {/* Animated Underline */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
                        />
                    </div>

                    {/* Name & Role with Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Vikhash KM
                                </h2>
                                <p className="text-xl text-gray-300 mt-2">
                                    UI/UX Designer & Creative Developer
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Description with animated border */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />
                        <p className="relative text-lg text-gray-300 leading-relaxed p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                            Blending <span className="text-primary font-semibold">aesthetics</span> with{' '}
                            <span className="text-secondary font-semibold">functionality</span> to create immersive digital experiences. 
                            Specializing in modern interface design and interactive web solutions.
                        </p>
                    </motion.div>

                    {/* CTA Buttons with Hover Effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary 
                                     text-white font-medium flex items-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform duration-300" />
                            <span className="relative flex items-center gap-3">
                                Explore My Work
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                            </span>
                        </a>
                        
                        <a
                            href="#contact"
                            className="group px-8 py-4 rounded-full border-2 border-white/20 hover:border-primary/50 
                                     text-white font-medium flex items-center gap-3 transition-all duration-300
                                     hover:bg-white/5 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                          -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="relative">Let's Connect</span>
                        </a>
                    </motion.div>

                    {/* Skills Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-6 pt-8"
                    >
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Palette className="w-4 h-4 text-primary" />
                            <span>Figma</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Code className="w-4 h-4 text-secondary" />
                            <span>Web Dev</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <MousePointer className="w-4 h-4 text-primary" />
                            <span>UX Design</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual - Abstract Design Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative hidden lg:block"
                >
                    {/* Main Visual Container */}
                    <div className="relative w-full aspect-square">
                        {/* Outer Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-primary/10 rounded-full"
                        />
                        
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border-2 border-secondary/10 rounded-full"
                        />

                        {/* Central Design Element */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                {/* Geometric Shapes */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 
                                              rounded-3xl rotate-45 shadow-2xl shadow-primary/20 
                                              backdrop-blur-xl border border-white/10" />
                                
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                              w-40 h-40 bg-gradient-to-tr from-white/5 to-transparent 
                                              rounded-2xl rotate-12" />
                                
                                {/* Floating UI Elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                                              w-16 h-16 bg-primary/20 rounded-xl border border-primary/30 
                                              backdrop-blur-sm flex items-center justify-center"
                                >
                                    <Palette className="w-6 h-6 text-primary" />
                                </motion.div>
                                
                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                                              w-16 h-16 bg-secondary/20 rounded-xl border border-secondary/30 
                                              backdrop-blur-sm flex items-center justify-center"
                                >
                                    <Code className="w-6 h-6 text-secondary" />
                                </motion.div>

                                {/* Center Element */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                              w-24 h-24 bg-gradient-to-br from-primary to-secondary 
                                              rounded-2xl flex items-center justify-center shadow-lg 
                                              shadow-primary/30 animate-pulse-slow">
                                    <span className="text-2xl font-bold text-white">VK</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-primary/30"
                                animate={{
                                    rotate: i * 45,
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                                style={{
                                    left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                                    top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                  w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl 
                                  border border-white/10 p-6 shadow-2xl"
                    >
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">3+</div>
                                <div className="text-sm text-gray-400">Years Exp</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400">Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-gray-400">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
                    >
                        <div className="w-1 h-2 bg-primary rounded-full mt-2" />
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}