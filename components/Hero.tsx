"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brush, Palette, Layers, PenTool, Sparkles, Code, Cpu, Globe, MousePointer2 } from "lucide-react";
import { useRef } from "react";

export function Hero() {    
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 bg-[#030014]">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px]" />
                
                {/* Abstract Grid/Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <Container className="relative z-10">
                <motion.div 
                    ref={ref}
                    style={{ y, opacity }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 group"
                    >
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                            <div className="px-6 py-2 rounded-full bg-black/80 backdrop-blur-xl transition-all duration-300 group-hover:bg-black/60">
                                <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-pink-400" />
                                    Welcome to my creative universe
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring", damping: 20 }}
                            className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50"
                        >
                            VIKHASH
                        </motion.h1>
                        
                        {/* Decorative Rings */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
                            className="absolute -top-10 -right-10 w-32 h-32 border border-purple-500/20 rounded-full border-dashed hidden md:block"
                        />
                         <motion.div
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity } }}
                            className="absolute -bottom-5 -left-10 w-24 h-24 border border-blue-500/20 rounded-full border-dotted hidden md:block"
                        />
                    </div>

                    {/* Subtitle / Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16 max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Future</span>
                        </h2>
                        <p className="text-lg text-white/60">
                            Merging artistic vision with technical precision to create immersive digital experiences.
                        </p>
                    </motion.div>

                    {/* Skills Mosaic */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl"
                    >
                        {[
                            { icon: Palette, label: "UI/UX Design", desc: "Crafting Interfaces", color: "text-pink-400", bg: "hover:bg-pink-500/10 hover:border-pink-500/30" },
                            { icon: Code, label: "Web design", desc: "Building Logic", color: "text-blue-400", bg: "hover:bg-blue-500/10 hover:border-blue-500/30" },
                            { icon: Sparkles, label: "Graphic design", desc: "Adding Life", color: "text-purple-400", bg: "hover:bg-purple-500/10 hover:border-purple-500/30" },
                            { icon: MousePointer2, label: "Logo design", desc: "Engaging Users", color: "text-cyan-400", bg: "hover:bg-cyan-500/10 hover:border-cyan-500/30" },
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={`flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 cursor-default group ${skill.bg}`}
                            >
                                <div className={`p-3 rounded-full bg-white/5 mb-3 group-hover:bg-white/10 transition-colors`}>
                                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                                </div>
                                <span className="text-base font-bold text-white mb-1">{skill.label}</span>
                                <span className="text-xs text-white/40">{skill.desc}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2 group">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Scroll</span>
                    <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center pt-2 group-hover:border-white/40 transition-colors">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 rounded-full bg-white"
                        />
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
