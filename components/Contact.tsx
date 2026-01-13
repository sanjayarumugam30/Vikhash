"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-gradient-to-t from-black to-[#050014]">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-px"
                >
                    <div className="bg-[#030014] rounded-[23px] p-8 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                            Looking for a UI/UX Designer or Graphic Designer to bring your ideas to life? I'm available for freelance projects and opportunities.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                            <a href="mailto:vvikas6493@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors w-full md:w-auto">
                                <Mail className="text-primary" />
                                <span className="text-white">vvikas6493@gmail.com</span>
                            </a>
                            <a href="tel:+918754602877" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors w-full md:w-auto">
                                <Phone className="text-secondary" />
                                <span className="text-white">+91 87546 02877</span>
                            </a>
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="https://www.linkedin.com/in/vikhash-k-m-22d06m2004y" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white transition-all text-gray-400">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.behance.net/vikasvk9" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-[#1769ff] hover:text-white transition-all text-gray-400 font-bold">
                                Be
                            </a>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/5 text-gray-500 text-sm">
                            <p>© {new Date().getFullYear()} Vikhash KM. All rights reserved.</p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
