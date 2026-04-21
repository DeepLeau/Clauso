'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const criteria = [
  { criterion: 'Zéro connaissance juridique requise', clauso: true, docusign: false, manual: false },
  { criterion: 'Templates validés par des avocats', clauso: true, docusign: false, manual: false },
  { criterion: 'Signature avec valeur juridique complète', clauso: true, docusign: true, manual: false },
  { criterion: 'Archivage automatique', clauso: true, docusign: false, manual: false },
  { criterion: 'Prix transparent et prévisible', clauso: true, docusign: false, manual: true },
]

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-[var(--surface-1)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium uppercase tracking-widest mb-4">
            Comparatif
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Pourquoi Clauso ?
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Face aux solutions traditionnelles, Clauso simplifie sans compromis sur la rigueur juridique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="text-xs font-medium text-[var(--text-3)] uppercase tracking-wider py-3">Critère</div>
              <div className="text-center py-3 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/30">
                <span className="text-sm font-semibold text-[var(--accent)]">Clauso</span>
              </div>
              <div className="text-center py-3">
                <span className="text-sm font-medium text-[var(--text-2)]">DocuSign</span>
              </div>
              <div className="text-center py-3">
                <span className="text-sm font-medium text-[var(--text-2)]">Rédaction manuelle</span>
              </div>
            </div>

            {/* Rows */}
            {criteria.map((row, i) => (
              <motion.div
                key={row.criterion}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-4 gap-4 py-5 border-b border-[var(--border-md)] hover:bg-[var(--surface-2)]/50 transition-colors duration-150 rounded-lg px-2"
              >
                <div className="text-sm text-[var(--text-1)] flex items-center">{row.criterion}</div>
                <div className="flex items-center justify-center">
                  {row.clauso ? (
                    <Check size={18} className="text-[var(--accent)]" strokeWidth={2} />
                  ) : (
                    <X size={18} className="text-[var(--red)]" strokeWidth={2} />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {row.docusign ? (
                    <Check size={18} className="text-[var(--accent)]" strokeWidth={2} />
                  ) : (
                    <X size={18} className="text-[var(--red)]" strokeWidth={2} />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {row.manual ? (
                    <Check size={18} className="text-[var(--accent)]" strokeWidth={2} />
                  ) : (
                    <X size={18} className="text-[var(--red)]" strokeWidth={2} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
