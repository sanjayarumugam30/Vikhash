"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Palette, Globe, PenTool, LayoutTemplate } from "lucide-react";

const services = [
    {
        title: "UI/UX Design",
        icon: LayoutTemplate,
        color: "from-purple-500 to-indigo-500",
        delay: 0
    },
    {
        title: "Web Design",
        icon: Globe,
        color: "from-blue-500 to-cyan-500",
        delay: 0.1
    },
    {
        title: "Graphic Design",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        delay: 0.2
    },
    {
        title: "Logo Design",
        icon: PenTool, // Using PenTool as a proxy for specialized logo work or similar
        color: "from-amber-400 to-orange-500",
        delay: 0.3
    }
];

export function Services() {
    return (
        <Section id="services" className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#030014]/50 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            whileHover={{ y: -5 }}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                    {service.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
