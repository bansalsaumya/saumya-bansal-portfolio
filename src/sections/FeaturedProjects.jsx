import { motion } from 'framer-motion';
import { ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { GitHubIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { featuredProjects } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="Featured Development Projects"
          title="Selected Applications"
          description="Applications built to demonstrate my development skills and solve real-world problems."
        />

        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glow-border rounded-2xl overflow-hidden bg-[var(--color-bg-card)] card-hover ${
                project.comingSoon ? 'opacity-70' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] opacity-30" style={{ fontFamily: 'var(--font-heading)' }}>
                        {project.number}
                      </span>
                      {project.comingSoon && (
                        <span className="flex items-center gap-1.5 badge !bg-amber-500/10 !text-amber-400 !border-amber-500/20">
                          <Clock size={12} /> Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] uppercase tracking-widest font-semibold mb-3 sm:mb-4">
                      {project.category}
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                        {project.features.slice(0, 8).map((f) => (
                          <span key={f} className="text-[0.65rem] sm:text-[0.7rem] px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                            {f}
                          </span>
                        ))}
                        {project.features.length > 8 && (
                          <span className="text-[0.65rem] sm:text-[0.7rem] px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]">
                            +{project.features.length - 8} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Tech Stack */}
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                        {project.tech.map((t) => (
                          <span key={t} className="badge !text-[0.65rem] sm:!text-[0.7rem]">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {!project.comingSoon && (
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !text-sm w-full sm:w-auto justify-center">
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2.5 !text-sm w-full sm:w-auto justify-center">
                          <GitHubIcon size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Visual */}
                <div className="relative bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-secondary)]/5 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[220px] sm:min-h-[280px] border-t lg:border-t-0 lg:border-l border-[var(--color-border)]">
                  {project.comingSoon ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--color-accent-glow)] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Clock size={28} className="text-[var(--color-accent)] sm:w-8 sm:h-8" />
                      </div>
                      <p className="text-[var(--color-text-muted)] text-xs sm:text-sm font-medium">In Development</p>
                    </div>
                  ) : (
                    <div className="w-full max-w-sm">
                      {/* App Mockup Frame */}
                      <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-primary)] shadow-2xl">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-bg-card)] border-b border-[var(--color-border)]">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                          <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)] font-mono truncate">{project.liveUrl}</span>
                        </div>
                        <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/10 flex items-center justify-center p-4">
                          <div className="text-center">
                            <p className="text-xl sm:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                              {project.title}
                            </p>
                            <p className="text-[0.7rem] sm:text-xs text-[var(--color-text-muted)] mt-1">{project.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
