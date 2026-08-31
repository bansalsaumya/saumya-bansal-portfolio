import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { contactInfo } from '../data/services';

const projectTypes = [
  'Website Development',
  'Frontend Development',
  'Full-Stack Project',
  'AI-Powered Solution',
  'Digital Marketing',
  'Freelance Collaboration',
  'Other',
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', type: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max px-6">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Great."
          description="Have a project, business idea or collaboration in mind? Let's talk."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
            >
              <div className="p-2.5 rounded-lg bg-[var(--color-accent-glow)]">
                <Mail size={18} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">Email</p>
                <p className="text-sm font-medium mt-0.5">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
            >
              <div className="p-2.5 rounded-lg bg-[var(--color-accent-glow)]">
                <MessageSquare size={18} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">WhatsApp</p>
                <p className="text-sm font-medium mt-0.5">+91 7435967985</p>
              </div>
            </a>

            <div className="flex gap-3 pt-2">
              {[
                { icon: GitHubIcon, href: contactInfo.github, label: 'GitHub' },
                { icon: LinkedInIcon, href: contactInfo.linkedin, label: 'LinkedIn' },
                { icon: InstagramIcon, href: contactInfo.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)]/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-type" className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Project Type</label>
                <select
                  id="contact-type"
                  value={formState.type}
                  onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[var(--color-bg-card)]">Select project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[var(--color-bg-card)]">{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-[var(--color-text-muted)]"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center !py-3.5"
              >
                {submitted ? '✓ Message Sent!' : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
