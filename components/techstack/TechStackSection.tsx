"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Wrench, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const techCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    technologies: [
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
    technologies: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/10",
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
];

export default function TechStackSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-6">
            Click on a category to explore the technologies I work with
          </p>
        </motion.div>

        {/* Category Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = openCategory === category.title;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, type: "spring", damping: 15 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.title)}
                className={`
                  group relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300
                  ${isOpen ? `${category.borderColor} shadow-2xl shadow-primary/40` : 'border-border hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20'}
                  bg-gradient-to-br ${category.color} backdrop-blur-sm overflow-hidden
                `}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative flex flex-col items-center text-center gap-4">
                  {/* Icon container with animation */}
                  <motion.div 
                    whileHover={{ 
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: 1.15,
                      transition: { duration: 0.6 }
                    }}
                    className={`
                      p-4 rounded-xl ${category.bgColor} border-2 ${category.borderColor}
                      shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300
                      group-hover:border-primary/50
                    `}
                  >
                    <Icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={36} />
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-foreground/60 group-hover:text-foreground/90 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform" />
                      <span className="font-medium">{category.technologies.length} technologies</span>
                    </div>
                  </div>

                  {/* Call to action */}
                  <motion.div 
                    className="mt-1 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {isOpen ? "✓ Opened" : "Click to explore →"}
                  </motion.div>
                </div>

                {/* Active indicator */}
                {isOpen && (
                  <motion.div
                    layoutId="activeIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                  />
                )}

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-primary/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Technology Details - Full Screen Modal */}
        <AnimatePresence mode="wait">
          {openCategory && (
            <motion.div
              key={openCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setOpenCategory(null)}
            >
              {techCategories
                .filter((cat) => cat.title === openCategory)
                .map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.title}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      onClick={(e) => e.stopPropagation()}
                      className={`
                        relative w-full max-w-6xl max-h-[90vh] overflow-y-auto
                        rounded-2xl p-8 border-2 ${category.borderColor}
                        bg-gradient-to-br ${category.color} backdrop-blur-sm
                        shadow-2xl
                      `}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setOpenCategory(null)}
                        className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors z-10"
                      >
                        <X size={24} />
                      </button>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor}`}>
                          <Icon className="text-primary" size={48} />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold mb-2">{category.title}</h3>
                          <p className="text-foreground/70">
                            All the {category.title.toLowerCase()} technologies I use
                          </p>
                        </div>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {category.technologies.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            initial={{ scale: 0, opacity: 0, rotate: -180 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{
                              type: "spring",
                              damping: 15,
                              stiffness: 100,
                              delay: index * 0.05,
                            }}
                            whileHover={{
                              scale: 1.1,
                              y: -10,
                              transition: { duration: 0.2 },
                            }}
                            className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 flex flex-col items-center gap-4"
                          >
                            <div className="relative w-16 h-16">
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="text-sm font-semibold text-center">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
