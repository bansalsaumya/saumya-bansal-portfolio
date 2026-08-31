import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { otherProjects } from '../data/projects';

export default function OtherProjects() {
  return (
    <section id="other-projects" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="Other Web Projects"
          title="Deployed Business Websites"
          description="Websites designed and developed for clients to establish and optimize their online presence."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group glow-border rounded-2xl overflow-hidden bg-[var(--color-bg-card)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-secondary)]/5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-1">My Contribution:</span>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer / Tech & Link */}
              <div className="px-6 pb-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((s) => (
                    <span
                      key={s}
                      className="text-[0.65rem] px-2 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2 !px-4 !text-xs inline-flex items-center gap-1.5 w-full justify-center group-hover:border-[var(--color-accent)] transition-all"
                  >
                    Live Website <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
