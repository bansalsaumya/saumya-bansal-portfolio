import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, Globe } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { contactInfo } from '../data/services';

const projectTypes = [
  'Full-Time / Remote Engineering Role',
  'Next.js / React Web Application',
  '3D WebGL / Interactive Product Site',
  'Technical SEO & Google #1 Ranking',
  'E-Commerce & WhatsApp Storefront',
  'Freelance Collaboration',
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Saumya!%0A%0A*Name:* ${encodeURIComponent(formState.name)}%0A*Email:* ${encodeURIComponent(formState.email)}%0A*Inquiry:* ${encodeURIComponent(formState.type || 'General')}%0A*Message:* ${encodeURIComponent(formState.message)}`;
    window.open(`https://wa.me/917435967985?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', type: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max px-6">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Exceptional."
          description="Hiring for a frontend / full-stack engineering role or launching a high-impact web product? Reach out directly."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
            >
              <div className="p-2.5 rounded-lg bg-[var(--color-accent-glow)]">
                <Mail size={18} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                  Email
                </p>
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
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                  WhatsApp Direct
                </p>
                <p className="text-sm font-medium mt-0.5">+91 7435967985</p>
              </div>
            </a>

            <a
              href="https://growvia-solutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
            >
              <div className="p-2.5 rounded-lg bg-[var(--color-accent-glow)]">
                <Globe size={18} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                  Agency &amp; Case Studies
                </p>
                <p className="text-sm font-medium mt-0.5">growvia-solutions.vercel.app ↗</p>
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
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name / company"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-type"
                  className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2"
                >
                  Opportunity / Project Type
                </label>
                <select
                  id="contact-type"
                  value={formState.type}
                  onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[var(--color-bg-card)]">
                    Select inquiry type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[var(--color-bg-card)]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the role, project scope, or timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-[var(--color-text-muted)]"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center !py-3.5">
                {submitted ? (
                  '✓ Opening Direct Message...'
                ) : (
                  <>
                    Send Instant Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
