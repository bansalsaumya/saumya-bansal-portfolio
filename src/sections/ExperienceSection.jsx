import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experience, education } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max px-6">
        <SectionHeading
          label="Experience"
          title="Work & Education"
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-8 border-l-2 border-[var(--color-border)] space-y-10">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-primary)]" />

                  <div className="p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="badge !text-[0.65rem]">{item.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.role}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((s) => (
                        <span key={s} className="text-[0.65rem] px-2 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glow-border rounded-2xl p-8 bg-[var(--color-bg-card)] sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[var(--color-accent-glow)]">
                  <GraduationCap size={20} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  Education
                </h3>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <p className="font-semibold text-sm">{edu.degree}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{edu.status}</p>
                </div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
