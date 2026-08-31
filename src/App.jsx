import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import FeaturedProjects from './sections/FeaturedProjects';
import ClientWork from './sections/ClientWork';
import FreelanceSection from './sections/FreelanceSection';
import ExperienceSection from './sections/ExperienceSection';
import AISection from './sections/AISection';
import ProcessSection from './sections/ProcessSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjects />
        <ClientWork />
        <ExperienceSection />
        <FreelanceSection />
        <AISection />
        <ProcessSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
