"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const skills = [
  { name: "Figma", level: 80, category: "Design", color: "text-purple-400" },
  { name: "Photoshop", level: 75, category: "Design", color: "text-cyan-400" },
  { name: "JavaScript", level: 90, category: "Development", color: "text-yellow-400" },
  { name: "UI/UX", level: 70, category: "Design", color: "text-pink-400" },
      { name: "Illustrator", level: 70, category: "Design", color: "text-orange-400" },

  { name: "Canva", level: 95, category: "Design", color: "text-green-400" },];

export function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-secondary">Proficiency</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Skills measured by expertise and practical experience
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="relative group"
            >
              <div className="relative w-40 h-40 mx-auto">
                {/* Circular progress */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-white/10"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * skill.level) / 100}
                    strokeLinecap="round"
                    className="text-secondary transition-all duration-1000"
                  />
                </svg>
                
                {/* Percentage in center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-3xl font-bold ${skill.color}`}>
                    {skill.level}%
                  </span>
                  <span className="text-sm text-gray-400 mt-1">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}