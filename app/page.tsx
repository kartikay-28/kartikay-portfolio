import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import BentoGrid from "@/components/bento/BentoGrid";
import TechStackSection from "@/components/techstack/TechStackSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
