"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

export default function AboutCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-start gap-6">
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="/kartik-profile.jpg"
            alt="Kartikay Rattan"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <User className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold">About Me</h3>
          </div>
          <p className="text-foreground/70 leading-relaxed">
            Full-stack developer focused on building modern web applications and scalable products. I specialize in creating seamless user experiences with clean, maintainable code.
          </p>
          <p className="text-foreground/70 leading-relaxed mt-4">
            Interested in SaaS, AI tools, and developer platforms. Always learning and exploring new technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
