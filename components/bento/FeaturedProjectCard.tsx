"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

export default function FeaturedProjectCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Sparkles className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold">Featured</h3>
      </div>
      <h4 className="text-xl font-semibold mb-2">TravelEase</h4>
      <p className="text-foreground/70 mb-4">
        Full-stack travel planning application with personalized recommendations
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "Node.js", "MongoDB"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <motion.a
        href="https://kartikay-travelease.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        View Live Demo
        <ExternalLink size={16} />
      </motion.a>
    </motion.div>
  );
}
