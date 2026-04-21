'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PricingCard } from '@/components/ui/PricingCard'

const plans = [
  {
    id: 'solo',
    name: 'Solo',
    monthlyPrice: 0,
    annualPrice: 0,
    period: 'gratuit',
    description: 'Pour démarrer en solo avec les essentiels.',
    features: [
      '1 utilisateur',
      '5 contrats/mois',
      'Templates de base (NDA, contrat client)',
      'Signature électronique',
      'Archivage 1 an',
      'Support community',
    ],
    ctaLabel: 'Commencer gratuitement',
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 29,
    annualPrice: 24,
    period: '/mois',
    description: 'Pour les freelances actifs qui veulent tout.',
    features: [
      '1 utilisateur',
      'Contrats illimités',
      'Tous les templates (NDA, contrat client, lettre de mission, etc.)',
      'Signature électronique avancée',
      'Archivage 5 ans',
      'Clause de résiliation & RGPD',
      'Support prioritaire',
    ],
    ctaLabel: 'Essai gratuit 14 jours',
    isPopular: true,
  },
  {
    id: 'studio',
    name: 'Studio',
    monthlyPrice: 79,
    annualPrice: 66,
    period: '/mois',
    description: 'Pour les studios et agences jusqu\'à 5 personnes.',
    features: [
      'Jusqu\'à 5 utilisateurs',
      'Contrats illimités',
      'Tous les templates Pro',
      'Collaboration en temps réel',
      'Archivage illimité',
      'API access',
      'Onboarding personnalisé',
      'Support dédié',
    ],
    ctaLabel: 'Commencer',
    isPopular: false,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 px-6 bg-[var(--surface-1)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-[var(--text-2)] mb-8 max-w-2xl mx-auto">
            Commencez gratuitement. Passez à Pro quand vous êtes prêt.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white rounded-full border border-[var(--border-md)]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${!isAnnual ? 'bg-white shadow-sm text-[var(--text-1)] font-semibold' : 'text-[var(--text-2)] hover:text-[var(--text-1)]'}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isAnnual ? 'bg-white shadow-sm text-[var(--text-1)] font-semibold' : 'text-[var(--text-2)] hover:text-[var(--text-1)]'}`}
            >
              Annuel
              <span className="ml-1.5 text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">-17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <PricingCard
                name={plan.name}
                monthlyPrice={plan.monthlyPrice}
                annualPrice={plan.annualPrice}
                period={plan.period}
                features={plan.features}
                isPopular={plan.isPopular}
                isAnnual={isAnnual}
                onSelect={() => {
                  window.location.href = `/signup?plan=${plan.id}`
                }}
                ctaLabel={plan.ctaLabel}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-[var(--text-3)] mt-8"
        >
          Annulez quand vous voulez. Aucune carte bancaire requise.
        </motion.p>
      </div>
    </section>
  )
}
