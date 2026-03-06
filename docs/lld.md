1️⃣ Portfolio Low Level Design (LLD)
Project Goal

Build a modern developer portfolio using Next.js and Tailwind, deployed on Vercel, featuring:

Animated minimal hero section

Bento grid layout

Project showcase

Skills and tech stack

Education and experience

Contact section

Smooth animations

2️⃣ Tech Stack

Frontend

Next.js (App Router)

Tailwind CSS

Framer Motion

shadcn/ui

Lucide icons

Deployment

Vercel

3️⃣ Folder Structure (LLD)
portfolio/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── bento/
│   │   ├── BentoGrid.tsx
│   │   ├── AboutCard.tsx
│   │   ├── TechStackCard.tsx
│   │   ├── GithubCard.tsx
│   │   └── ContactCard.tsx
│   │
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── contact/
│   │   └── ContactSection.tsx
│   │
│   └── footer/
│       └── Footer.tsx
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
├── public/
│
└── styles/
4️⃣ Component Design
Navbar

Purpose
Navigation between sections.

Links

Home
Projects
Skills
About
Contact

Features

Sticky navbar

Smooth scrolling

Mobile menu

Hero Component

Purpose
First impression.

Content

Hi, I'm Kartikay

Full-Stack Developer

I build scalable web applications using
Next.js, React, Node.js and modern databases.

Buttons

View Projects
Download Resume
Contact Me

Animations

Text fade-in

Button hover animation

BentoGrid Component

Purpose
Show quick information cards.

Grid Layout

About Card
Tech Stack Card
Featured Project Card
GitHub Stats Card
Contact Card
About Card

Content

Full-stack developer focused on building
modern web applications and scalable products.

Interested in SaaS, AI tools, and developer platforms.
Tech Stack Card

Icons

Next.js
React
Node.js
MongoDB
Tailwind
Flutter

Hover effect

Scale animation

Glow effect

GitHub Card

Show

GitHub contributions
LeetCode problems solved
Open source projects
Projects Section

Purpose
Highlight main projects.

Project Card Fields

title
description
techStack
githubLink
liveDemo
image

Example

TravelEase

AI-powered travel planning platform.

Tech
Next.js
Node.js
MongoDB
External APIs

Features

Hover animation

Project modal

Demo button

Contact Section

Fields

Name
Email
Message

Optional

Email integration later.

Footer

Content

© 2026 Kartikay Rattan
Built with Next.js and Tailwind
5️⃣ Animation Plan

Library

Framer Motion

Animations

Hero

opacity: 0 → 1
y: 50 → 0

Cards

hover scale: 1.05

Scroll reveal

fade up animation
6️⃣ Data Layer
projects.ts
export const projects = [
{
title: "TravelEase",
description: "AI travel planning platform",
tech: ["Next.js", "Node.js", "MongoDB"],
github: "",
demo: ""
}
]
skills.ts
export const skills = [
"Next.js",
"React",
"Node.js",
"MongoDB",
"Tailwind",
"Flutter"
]
7️⃣ Performance Requirements

Lighthouse score above 90

Optimized images

Lazy loaded sections

SEO metadata

8️⃣ Deployment

Deploy on

Vercel

Steps

push code to GitHub
connect repo to Vercel
deploy