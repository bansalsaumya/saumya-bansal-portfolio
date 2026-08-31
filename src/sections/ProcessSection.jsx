import { motion } from 'framer-motion';
import { Search, Layout, Code2, CheckCircle, Rocket, RefreshCw } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  { number: '01', title: 'Understand', description: 'Understand the problem and requirements.', icon: Search },
  { number: '02', title: 'Plan', description: 'Plan the user experience, architecture and technology.', icon: Layout },
  { number: '03', title: 'Build', description: 'Develop the frontend/backend and integrations.', icon: Code2 },
  { number: '04', title: 'Test', description: 'Test responsiveness, functionality and user experience.', icon: CheckCircle },
  { number: '05', title: 'Deploy', description: 'Deploy and configure the project.', icon: Rocket },
  { number: '06', title: 'Improve', description: 'Monitor feedback and continuously improve.', icon: RefreshCw },
];

export default function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-max px-6">
        <SectionHeading
          label="Work Process"
          title="How I Build Projects"
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3 sm:mb-5">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--color-accent-glow)]">
                    <step.icon size={16} className="sm:w-5 sm:h-5 text-[var(--color-accent)]" />
                  </div>
                  <span className="text-xl sm:text-3xl font-bold text-[var(--color-text-muted)] opacity-15" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </h3>
                <p className="text-[0.65rem] sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
