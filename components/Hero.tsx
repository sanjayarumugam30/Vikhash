"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
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
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b001a] via-[#090012] to-[#030014]">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px]" />
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
                            <div className="px-6 py-2 rounded-full bg-black/60 backdrop-blur-xl transition-all duration-300 group-hover:bg-black/40">
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

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-20"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40 transition-all"
                            onClick={() => window.open("https://drive.google.com/drive/folders/1CcqAQB7qh2nnk0gNCnJltRNwCQ5KeHsc?usp=drive_link", "_blank")}
                        >
                            View Projects
                        </motion.button>

                    
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