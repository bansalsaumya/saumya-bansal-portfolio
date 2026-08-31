import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading label="About Me" title="Designing with Purpose, Building with Code." />

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
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">Status</p>
                <p className="text-sm font-semibold flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
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
              I am Saumya Bansal, an IT student and freelance developer focused on building modern web applications and digital solutions. I have worked on real-world websites and digital projects for businesses while developing my skills in frontend development, programming, AI tools and digital marketing.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              I enjoy combining technology, design and business understanding to create practical digital products. My experience spans across web development, client work for manufacturing, hospitality and real estate businesses, and AI-powered creative workflows.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                { label: 'Education', value: 'IMSC-IT Student' },
                { label: 'Focus', value: 'Full-Stack Development' },
                { label: 'Specialty', value: 'React & AI Tools' },
                { label: 'Experience', value: 'Freelance & Client Work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                >
                  <div className="w-1 h-8 rounded-full bg-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{item.label}</p>
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
