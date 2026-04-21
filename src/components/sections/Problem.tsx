'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, FileX } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    title: 'Templates trouvés sur Google',
    description: 'Un contrat copié-collé sans adaptation peut contenir des clauses invalides ou incomplètes. Le risque juridique est réel à chaque signature.',
  },
  {
    icon: Clock,
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Des heures perdues à négocier',
    description: 'Entre les allers-retours par email, les relances et les reformulations, un contrat classique vous coûte entre 3 et 5 heures.',
  },
  {
    icon: FileX,
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    title: 'Documents jamais signés',
    description: 'Un contrat envoyé par email et oublié dans une boîte de réception, c\'est un projet qui n\'a jamais démarrer. Le suivi, c\'est le problème.',
  },
]

export default function Problem() {
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
            Le problème
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Le juridique, un cauchemar pour les freelances
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Chaque mois, des heures précieuses passent dans des échanges useless — alors que tout pourrait être résolu en quelques clics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-xl border border-[var(--border-md)] p-8 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${problem.color} flex items-center justify-center mb-6`}>
                <problem.icon size={22} className={problem.iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-[var(--text-1)] mb-2">{problem.title}</h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
