export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  category: "product" | "development";
}

// Product-Based Projects
export const productProjects: Project[] = [
  {
    title: "TravelEase",
    description: "A full-stack web application designed to redefine how travelers discover and plan their journeys. Combines modern web technologies to provide personalized travel recommendations and itinerary planning.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/kalviumcommunity/S84_Kartikay_Capstone_TravelEase",
    demo: "https://kartikay-travelease.netlify.app/",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    category: "product",
  },
  {
    title: "CrickIntel",
    description: "AI-powered cricket analytics platform built using the MERN stack and Gemini API. Delivers real-time match insights, player comparisons, and fantasy tips using cutting-edge AI technology.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/kalviumcommunity/S84_Kartikay_CrickIntel",
    demo: "https://crickintel.netlify.app/",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    category: "product",
  },
  {
    title: "SnackSlam",
    description: "A deep dive into the world's most overhyped snacks. Analyzes snack popularity, common criticisms, and provides honest reviews to help consumers make informed choices about trending treats.",
    tech: ["JavaScript", "React", "CSS", "API Integration"],
    github: "https://github.com/kalviumcommunity/S_84_SnackSlam",
    demo: "https://asap-snackslam.netlify.app/",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&q=80",
    category: "product",
  },
  {
    title: "Sevadaar",
    description: "A community service platform connecting volunteers with local NGOs and social causes. Helps organize and manage volunteer activities, track contributions, and build a stronger community.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/kalviumcommunity/S84-0226-TeamHAK-Mobile-App-With-Flutter-And-Firebase-Sevadaar",
    demo: "https://github.com/kalviumcommunity/S84-0226-TeamHAK-Mobile-App-With-Flutter-And-Firebase-Sevadaar",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    category: "product",
  },
  {
    title: "CareBridge",
    description: "Healthcare management system that bridges the gap between patients and healthcare providers. Features appointment scheduling, medical records management, and telemedicine capabilities.",
    tech: ["Next.js", "AWS", "Azure", "Full-Stack"],
    github: "https://github.com/kalviumcommunity/S84-0126-TriForge-Full-Stack-With-NextjsAnd-AWS-Azure-CareBridge",
    demo: "https://carebridge-triforge.vercel.app/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "product",
  },
];

// Development Projects (HTML/CSS/JS)
export const developmentProjects: Project[] = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather application that displays current weather conditions and forecasts. Features location search, weather maps, and detailed meteorological data visualization.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: "https://github.com/kartikay-28/weather-app-javascript",
    demo: "https://1-weather-app-javascript.netlify.app/",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    category: "development",
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz app with multiple categories and difficulty levels. Features timer, score tracking, and detailed result analysis with performance metrics.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kartikay-28/Quiz-app",
    demo: "https://k28-quiz-app.netlify.app/",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    category: "development",
  },
  {
    title: "Calculator GUI",
    description: "Graphical calculator application built with Python. Features a clean interface with standard and advanced mathematical operations for efficient calculations.",
    tech: ["Python", "Tkinter", "GUI"],
    github: "https://github.com/kartikay-28/Calculator_GUI_Py",
    demo: "https://github.com/kartikay-28/Calculator_GUI_Py",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80",
    category: "development",
  },
  {
    title: "To-Do List CLI",
    description: "Command-line interface task management application built with C++. Allows users to add, remove, and manage tasks efficiently through terminal commands.",
    tech: ["C++", "CLI"],
    github: "https://github.com/kartikay-28/To-do-list-cpp",
    demo: "https://github.com/kartikay-28/To-do-list-cpp",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    category: "development",
  },
];

export const allProjects: Project[] = [...productProjects, ...developmentProjects];
