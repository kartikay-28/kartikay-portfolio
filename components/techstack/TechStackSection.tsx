"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    technologies: ["Flutter", "Dart", "React Native", "Android", "iOS"],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Dart"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    technologies: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-background/50 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 bg-background/50 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
