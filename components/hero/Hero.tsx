"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2"
            >
              Hi, I&apos;m{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent inline-block"
              >
                Kartikay.
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-foreground/70 mb-8 max-w-xl"
            >
              I build modern, secure, and scalable web applications with clean UI, smooth animations, and real-world performance in mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="mailto:kartikayrattan1@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-foreground px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-secondary/80 transition-colors text-sm"
              >
                Contact Me
                <Mail size={18} />
              </motion.a>

              <motion.a
                href="/kartikayrattanresume_1771162894.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-border text-foreground px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-card transition-colors text-sm"
              >
                Download Resume
                <Download size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl"
            >
              <Image
                src="/kartik-profile.jpg"
                alt="Kartikay Rattan"
                fill
                className="object-cover scale-125"
                priority
              />
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
