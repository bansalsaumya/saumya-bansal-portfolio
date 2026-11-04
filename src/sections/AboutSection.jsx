import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="About Me"
          title="Engineering Web Products That Rank, Convert & Scale."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glow-border">
                <img
                  src="/assets/about-professional.png"
                  alt="Saumya Bansal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-bg-card)] glow-border rounded-xl px-5 py-3">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                  Status
                </p>
                <p className="text-sm font-semibold flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Remote Roles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              I am <strong>Saumya Bansal</strong>, a Full-Stack &amp; 3D Web Developer, Technical SEO Engineer, and Founder of{' '}
              <a
                href="https://growvia-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-light)] font-medium hover:underline"
              >
                Growvia Solutions
              </a>
              . While pursuing my Integrated M.Sc. in Information Technology (IMSC-IT), I have independently architected and shipped <strong>6+ live production websites and e-commerce platforms</strong> for real businesses across retail, manufacturing, hospitality, and real estate.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              What sets my work apart is a <strong>full-funnel engineering mindset</strong>: I combine modern frontend &amp; 3D WebGL craftsmanship (<strong>React, Next.js, Three.js, GSAP</strong>) with measurable business outcomes — including <strong>#1 Google Search &amp; Map Pack rankings</strong>, JSON-LD schema architecture, and high-converting WhatsApp/D2C checkout flows.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                { label: 'Education', value: 'IMSC-IT (Information Technology)' },
                { label: 'Core Engineering', value: 'Next.js, React, Three.js & GSAP' },
                { label: 'Growth & Search', value: 'Technical SEO & #1 Google GBP' },
                { label: 'Track Record', value: '6+ Paying Clients & 2 Flagship 3D Apps' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                >
                  <div className="w-1 h-8 rounded-full bg-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
