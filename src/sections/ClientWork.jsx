import { motion } from 'framer-motion';
import { ExternalLink, FileText, Star, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { clients, testimonials } from '../data/clients';

export default function ClientWork() {
  return (
    <section id="clients" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-max px-6">
        <SectionHeading
          label="Verified Production Track Record"
          title="Built for Real Businesses"
          description="Full-stack web portals, Next.js e-commerce stores, #1 Google local SEO rankings, and digital growth systems shipped for paying clients across India."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
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
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-65" />
                  {client.impact && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[0.7rem] font-semibold bg-[#0a0a0f]/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-xl shadow-lg">
                      {client.impact}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="badge !text-[0.65rem]">{client.industry}</span>
                  </div>
                  <h3
                    className="text-xl lg:text-2xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {client.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {client.description}
                  </p>

                  {/* Services Deliverables */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {client.services.map((s) => (
                        <span
                          key={s}
                          className="text-[0.68rem] px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
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
                <div className="mb-5">
                  <span className="text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">
                    Tech &amp; Growth Stack:
                  </span>
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

                <div className="grid sm:grid-cols-2 gap-3">
                  {client.liveUrl && (
                    <a
                      href={client.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2.5 !px-4 !text-xs inline-flex items-center gap-1.5 w-full justify-center"
                    >
                      Live Website <ExternalLink size={12} />
                    </a>
                  )}
                  {client.caseStudyUrl && (
                    <a
                      href={client.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-secondary !py-2.5 !px-4 !text-xs inline-flex items-center gap-1.5 w-full justify-center ${
                        !client.liveUrl ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <FileText size={12} /> Read Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Client Testimonials Strip */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2">
              Client Endorsements
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Business Owners Say
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-6 lg:p-7 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="badge !text-[0.65rem]">{t.metric}</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">{t.author}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                  </div>
                  <Quote size={20} className="text-[var(--color-accent)] opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
