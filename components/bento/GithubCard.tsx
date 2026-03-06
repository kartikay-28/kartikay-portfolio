"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star } from "lucide-react";

export default function GithubCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Github className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold">GitHub Stats</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500" size={20} />
            <span className="text-foreground/70">Contributions</span>
          </div>
          <span className="text-2xl font-bold">979</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitFork className="text-blue-500" size={20} />
            <span className="text-foreground/70">Repositories</span>
          </div>
          <span className="text-2xl font-bold">45+</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="text-primary" size={20} />
            <span className="text-foreground/70">Longest Streak</span>
          </div>
          <span className="text-2xl font-bold">23 days</span>
        </div>
      </div>
      <motion.a
        href="https://github.com/kartikay-28"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="mt-6 block text-center bg-primary/10 text-primary py-2 rounded-lg hover:bg-primary/20 transition-colors"
      >
        View Profile
      </motion.a>
    </motion.div>
  );
}

function Code2({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}
