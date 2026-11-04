import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          style={align === 'center' ? { margin: '1rem auto 0' } : {}}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
