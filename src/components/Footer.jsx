import { Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';
import { contactInfo } from '../data/services';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Saumya Bansal
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Full-Stack Developer · AI Developer · Freelancer
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 Saumya Bansal. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
            Built with <Heart size={12} className="text-[var(--color-accent)]" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
