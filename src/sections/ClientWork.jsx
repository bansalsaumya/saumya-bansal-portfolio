import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { clients } from '../data/clients';

export default function ClientWork() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveSlide(newIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth',
      });
      setActiveSlide(index);
    }
  };

  return (
    <section id="clients" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <SectionHeading
            label="Real-World Client Work"
            title="Built for Real Businesses"
            description="Web development, SEO strategy, branding, and digital growth solutions completed for real businesses."
          />

          {/* Slider Controls for Mobile */}
          <div className="flex items-center gap-2 md:hidden mb-4 self-end">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="p-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              0{activeSlide + 1} / 0{clients.length}
            </span>
            <button
              onClick={() => scrollToSlide(Math.min(clients.length - 1, activeSlide + 1))}
              disabled={activeSlide === clients.length - 1}
              className="p-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] disabled:opacity-30 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Snap Slider / Desktop Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[85vw] sm:w-[75vw] md:w-auto shrink-0 snap-center group glow-border rounded-2xl overflow-hidden bg-[var(--color-bg-card)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-secondary)]/5 relative">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="badge !text-[0.65rem]">{client.industry}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 sm:mb-6 line-clamp-3 md:line-clamp-none">
                    {client.description}
                  </p>

                  {/* Services Deliverables */}
                  <div className="mb-4">
                    <span className="text-[0.65rem] sm:text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">Services Rendered:</span>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {client.services.slice(0, 6).map((s) => (
                        <span
                          key={s}
                          className="text-[0.6rem] sm:text-[0.65rem] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack and Live URL */}
              <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8 pt-0 mt-auto">
                <div className="mb-4">
                  <span className="text-[0.65rem] sm:text-xs font-semibold text-[var(--color-accent-light)] uppercase tracking-wider block mb-2">Tech Stack:</span>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {client.tech.map((t) => (
                      <span
                        key={t}
                        className="badge !text-[0.6rem] sm:!text-[0.65rem] !bg-[var(--color-accent-glow)] !text-[var(--color-accent-light)]"
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

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeSlide === i ? 'w-6 bg-[var(--color-accent)]' : 'w-2 bg-[var(--color-text-muted)]/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
