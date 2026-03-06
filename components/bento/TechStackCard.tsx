"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skills } from "@/data/skills";

export default function TechStackCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Code2 className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold">Tech Stack</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3 hover:bg-secondary transition-colors"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
