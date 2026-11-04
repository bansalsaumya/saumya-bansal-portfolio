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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative p-7 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl bg-[var(--color-accent-glow)]">
                  <step.icon size={20} className="text-[var(--color-accent)]" />
                </div>
                <span className="text-3xl font-bold text-[var(--color-text-muted)] opacity-15" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
