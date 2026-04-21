'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ShieldCheck, PenTool, Database, Check } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Templates validés par des avocats',
    description: 'Chaque clause a été relue et approuvée par des juristes spécialisés en droit des affaires et en propriété intellectuelle.',
  },
  {
    icon: PenTool,
    title: 'Signature électronique intégrée',
    description: 'La signature est juridiquement opposable en France et en Europe, avec horodatage certifié et traçabilité complète.',
  },
  {
    icon: Database,
    title: 'Archivage sécurisé automatique',
    description: 'Tous vos contrats sont stockés de manière sécurisée et accessibles en un clic, avec historique des versions intégré.',
  },
]

export default function Solution() {
  const [signed, setSigned] = useState(false)
  const [signing, setSigning] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setSigning(true), 1500)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (signing) {
      const id = setTimeout(() => setSigned(true), 2500)
      return () => clearTimeout(id)
    }
  }, [signing])

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium uppercase tracking-widest mb-4">
            La solution
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Des contrats parfaits, sans avocat
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Clauso vous accompagne de la création à la signature, sans jamais vous laisser seul face à un document juridiquement flou.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Left — feature list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex flex-col gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/6 flex items-center justify-center shrink-0">
                  <feature.icon size={20} className="text-[var(--accent)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-1)] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — animated signature widget */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="rounded-2xl border border-[var(--border-md)] bg-[var(--surface-1)] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-[var(--text-1)]">Contrat NDA</p>
                  <p className="text-xs text-[var(--text-3)]">Studio Alpha · 14 janvier 2025</p>
                </div>
                {signed && (
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium flex items-center gap-1">
                    <Check size={12} strokeWidth={2} /> Signé
                  </span>
                )}
              </div>

              <div className="mb-6 p-4 rounded-lg border border-[var(--border)] bg-white">
                <div className="space-y-2 mb-4">
                  {['Parties identifiées', 'Objet du contrat', 'Clause de confidentialité', 'Durée de 24 mois'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-[var(--border-md)] flex items-center justify-center bg-[var(--accent)]/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      </div>
                      <span className="text-xs text-[var(--text-2)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs text-[var(--text-3)] block mb-1">Signature</label>
                <div className="rounded-lg border border-[var(--border-md)] bg-white px-4 py-3 flex items-center gap-2">
                  <div className="flex-1 h-8 flex items-center">
                    {!signing ? (
                      <span className="text-sm text-[var(--text-3)]">Votre signature ici...</span>
                    ) : !signed ? (
                      <span className="text-sm font-medium text-[var(--text-2)] animate-pulse">Marie L. <span className="inline-block w-0.5 h-4 bg-[var(--text-3)] animate-pulse ml-0.5 align-middle" /></span>
                    ) : (
                      <span className="text-sm font-semibold text-[var(--accent)]">Marie L. ✓</span>
                    )}
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => { setSigning(true); setTimeout(() => setSigned(true), 2500) }}
                disabled={signed || signing}
                whileHover={{ scale: signed ? 1 : 1.02 }}
                whileTap={{ scale: signed ? 1 : 0.98 }}
                className="w-full h-11 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
              >
                {signing ? (
                  signed ? 'Contrat signé' : (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Signature en cours...
                    </span>
                  )
                ) : (
                  'Signer le contrat'
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
