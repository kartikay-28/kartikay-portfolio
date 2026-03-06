"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Mail className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold">Connect</h3>
      </div>
      <div className="space-y-4">
        <motion.a
          href="mailto:kartikayrattan1@gmail.com"
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
        >
          <Mail size={20} />
          <span className="text-sm">kartikayrattan1@gmail.com</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kartikay-rattan-10b071326/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </motion.a>
        <motion.a
          href="https://github.com/kartikay-28"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
        >
          <Github size={20} />
          <span>GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
