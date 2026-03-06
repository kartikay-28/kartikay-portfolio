"use client";

import { motion } from "framer-motion";
import { Code, Trophy } from "lucide-react";

export default function LeetCodeCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Code className="text-primary" size={24} />
        </div>
        <h3 className="text-2xl font-bold">LeetCode</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-500" size={20} />
            <span className="text-foreground/70">Problems Solved</span>
          </div>
          <span className="text-2xl font-bold">150</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-foreground/70">Easy</span>
          </div>
          <span className="text-lg font-semibold">94</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-foreground/70">Medium</span>
          </div>
          <span className="text-lg font-semibold">50</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-foreground/70">Hard</span>
          </div>
          <span className="text-lg font-semibold">6</span>
        </div>
      </div>
      <motion.a
        href="https://leetcode.com/u/kartikay002/"
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
