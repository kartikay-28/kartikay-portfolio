"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-foreground/70">
              © {currentYear} Kartikay Rattan. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart size={14} className="text-red-500" /> using
              Next.js and Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/kartikay-28"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kartikay-rattan-10b071326/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:kartikayrattan1@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
