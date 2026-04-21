'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[var(--border-md)] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-[var(--text-1)] pr-6 leading-relaxed group-hover:text-[var(--accent)] transition-colors duration-150">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[var(--text-3)] flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180 text-[var(--accent)]'
          )}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--text-2)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const faqData = [
  {
    question: 'Les contrats générés par Clauso ont-ils une valeur juridique ?',
    answer:
      'Oui. Tous les contrats générés par Clauso incluent une signature électronique conforme au Règlement eIDAS (UE n° 910/2014). Ils sont juridiquement valides en France et dans l\'ensemble de l\'Union européenne.',
  },
  {
    question: 'Combien de temps faut-il pour signer un contrat ?',
    answer:
      'En moyenne, moins de 3 minutes. Sélectionnez votre template, personnalisez si besoin, envoyez au signataire par email — il signe en un clic depuis n\'importe quel appareil.',
  },
  {
    question: 'Puis-je modifier un contrat après l\'avoir envoyé ?',
    answer:
      'Tant qu\'aucun signataire n\'a validé le document, vous pouvez le modifier librement. Une fois signé, le contrat est verrouillé et archivé dans son état final — toute modification crée un nouveau version.',
  },
  {
    question: 'Clauso fonctionne-t-il avec mon outil de gestion de projet ?',
    answer:
      'Nous proposons des intégrations avec Notion, Slack et une API pour les usages avancés. Nous ajoutons de nouvelles intégrations chaque mois selon les demandes de nos utilisateurs.',
  },
  {
    question: 'Quelle est la période d\'essai ?',
    answer:
      '14 jours gratuits, sans carte bancaire. Accédez à toutes les fonctionnalités du plan Pro pendant la période d\'essai. Si vous ne souscrivez pas, vos contrats restent accessibles 30 jours supplémentaires.',
  },
  {
    question: 'Puis-jeExporter mes contrats signés ?',
    answer:
      'Tous vos contrats sont exportables en PDF à tout moment, même après la fin d\'un abonnement. L\'archivage est inclus sans limite de durée. Vous pouvez aussi inviter un avocat à consulter un contrat directement depuis votre espace.',
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer:
      'Absolument. Clauso est hébergé en France, conforme RGPD, et toutes les données sont chiffrées en transit (TLS) et au repos (AES-256). Aucun tiers n\'accède à vos contrats. Notre infrastructure est auditée annuellement.',
  },
  {
    question: 'Comment annuler mon abonnement ?',
    answer:
      'Depuis votre tableau de bord, en un clic. Aucun frais de résiliation, aucun engagement. Vous conservez l\'accès à vos contrats jusqu\'à la fin de la période payée, puis en lecture seule à vie.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-[var(--surface-1)]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Questions fréquentes
          </h2>
          <p className="text-base text-[var(--text-2)] max-w-md mx-auto">
            Tout ce que vous devez savoir avant de commencer. Si vous ne trouvez pas votre réponse, contactez-nous.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-[var(--bg)] rounded-2xl border border-[var(--border-md)] px-6">
          {faqData.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Contact link */}
        <div className="text-center mt-10">
          <p className="text-sm text-[var(--text-2)]">
            Vous ne trouvez pas la réponse ?{' '}
            <a
              href="mailto:contact@clauso.fr"
              className="text-[var(--accent)] font-medium hover:text-[var(--accent-hi)] transition-colors duration-150"
            >
              Contactez-nous →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
