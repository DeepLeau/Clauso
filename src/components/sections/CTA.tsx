'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-24 px-6 bg-[var(--bg)] relative overflow-hidden">
      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(5,150,105,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06] text-xs font-medium text-[var(--accent)]"
        >
          <Shield strokeWidth={1.5} className="w-3.5 h-3.5" />
          Aucune carte bancaire requise
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight leading-tight"
        >
          Votre prochain contrat en moins de 5&nbsp;minutes
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="text-base text-[var(--text-2)] max-w-md"
        >
          14 jours gratuits pour tester tous les templates. Zéro engagement. Zéro carte bancaire.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <Link
            href="/signup"
            className="h-11 px-6 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white text-sm font-semibold transition-colors duration-150 shadow-[0_0_24px_rgba(5,150,105,0.2)]"
          >
            Démarrer gratuitement
          </Link>
          <Link
            href="#features"
            className="h-11 px-6 rounded-xl border border-[var(--border-md)] bg-transparent hover:bg-[var(--surface-1)] text-[var(--text-1)] text-sm font-medium transition-colors duration-150"
          >
            Voir les templates
          </Link>
        </motion.div>

        {/* Social proof micro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-xs text-[var(--text-3)] mt-1"
        >
          Plus de 2 400 freelances font confiance à Clauso
        </motion.p>
      </div>
    </section>
  )
}
