# Kartikay Rattan - Developer Portfolio

A modern, responsive developer portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark theme with minimal design
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🎯 Bento grid layout for content sections
- 🚀 Optimized for performance
- 📊 Project showcase with animated cards
- 📧 Contact form
- 🔗 Social media integration

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kartikay-portfolio.git
cd kartikay-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kartikay-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar/             # Navigation component
│   ├── hero/               # Hero section
│   ├── bento/              # Bento grid cards
│   ├── projects/           # Projects section
│   ├── contact/            # Contact form
│   └── footer/             # Footer component
├── data/
│   ├── projects.ts         # Project data
│   └── skills.ts           # Skills data
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Update Personal Information

1. **Projects:** Edit `data/projects.ts` to add your projects
2. **Skills:** Edit `data/skills.ts` to update your tech stack
3. **Contact:** Update email and social links in components
4. **Resume:** Add your resume PDF to the `public` folder

### Modify Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: "hsl(142, 76%, 36%)", // Change primary color
  // ... other colors
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## Performance

- Lighthouse score: 90+
- Optimized images with Next.js Image component
- Lazy loading for sections
- SEO optimized with metadata

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: kartikayrattan1@gmail.com
- LinkedIn: [Kartikay Rattan](https://www.linkedin.com/in/kartikay-rattan-10b071326/)
- GitHub: [kartikay-28](https://github.com/kartikay-28)
- LeetCode: [kartikay002](https://leetcode.com/u/kartikay002/)

---

Built with ❤️ using Next.js and Tailwind CSS