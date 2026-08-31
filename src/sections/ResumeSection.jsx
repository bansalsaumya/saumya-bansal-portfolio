import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import { contactInfo } from '../data/services';

export default function ResumeSection() {
  return (
    <section className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Want to Know More About My Experience?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Download my resume or connect with me on professional platforms to learn more about my background and projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={contactInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={18} /> Download Resume
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GitHubIcon size={18} /> View GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <LinkedInIcon size={18} /> View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
