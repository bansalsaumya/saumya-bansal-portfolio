import { motion } from 'framer-motion';
import { Globe, Code2, Sparkles, Search, Share2, Palette } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

const iconMap = { Globe, Code2, Sparkles, Search, Share2, Palette };

export default function FreelanceSection() {
  return (
    <section id="services" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="Freelance Work"
          title="Building Digital Solutions for Real Businesses"
          description="Alongside my technical development work, I work as a freelancer helping businesses build websites, improve their digital presence, create content and use AI-powered tools."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-7 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[var(--color-accent-glow)] group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <Icon size={22} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="text-3xl font-bold text-[var(--color-text-muted)] opacity-20" style={{ fontFamily: 'var(--font-heading)' }}>
                    {service.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
