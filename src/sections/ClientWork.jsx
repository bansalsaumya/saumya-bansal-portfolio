import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { clients } from '../data/clients';

export default function ClientWork() {
  return (
    <section id="clients" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="Real-World Client Work"
          title="Built for Real Businesses"
          description="Web development, SEO strategy, branding, and digital growth solutions completed for real businesses."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glow-border rounded-2xl overflow-hidden bg-[var(--color-bg-card)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-secondary)]/5 relative">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge !text-[0.65rem]">{client.industry}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {client.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {client.description}
                  </p>

                  {/* Services Deliverables */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">Services Rendered:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {client.services.map((s) => (
                        <span
                          key={s}
                          className="text-[0.65rem] px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack and Live URL */}
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 mt-auto">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">Tech Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {client.tech.map((t) => (
                      <span
                        key={t}
                        className="badge !text-[0.65rem] !bg-[var(--color-accent-glow)] !text-[var(--color-accent-light)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {client.liveUrl && (
                  <a
                    href={client.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-4 !text-xs inline-flex items-center gap-1.5 w-full justify-center group-hover:bg-[var(--color-accent-light)] transition-all mt-2"
                  >
                    Visit Live Website <ExternalLink size={12} />
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
