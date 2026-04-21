'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [2, -2])
  const rotateY = useTransform(x, [-100, 100], [-2, 2])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 80)
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 80)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative rounded-xl border border-[var(--border-md)] bg-[var(--surface-1)] p-5 flex flex-col gap-3 overflow-hidden',
        className || ''
      )}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="flex flex-col gap-2 flex-1">
        {children}
      </div>
    </motion.div>
  )
}

function MetricsBar({ metrics }: { metrics: Array<{ label: string; value: number; suffix?: string }> }) {
  return (
    <div className="mt-2 flex flex-col gap-3">
      {metrics.map(({ label, value, suffix }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
          className="flex justify-between text-xs"
        >
          <span className="text-[var(--text-3)]">{label}</span>
          <span className="text-[var(--text-1)] font-medium">{value}{suffix}</span>
          <div className="h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden flex-1 mx-3 max-w-[80px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(100, value)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 * i }}
              className="h-full rounded-full bg-[var(--accent)]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function TimelineFeature() {
  const items = [
    { version: 'v1.0', date: '12 jan. 2025', label: 'Contrat créé' },
    { version: 'v1.1', date: '14 jan. 2025', label: 'Clause de résiliation ajoutée' },
    { version: 'v1.2', date: '15 jan. 2025', label: 'Parties signées' },
  ]
  return (
    <div className="relative mt-2">
      <div className="absolute top-0 bottom-0 left-[9px] w-px bg-[var(--border-md)]" />
      {items.map(({ version, date, label }, i) => (
        <motion.div
          key={version}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
          className="flex gap-3 mb-3 relative"
        >
          <div className="z-10 mt-0.5 w-5 h-5 rounded-full border border-[var(--border-md)] bg-white flex items-center justify-center shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium text-[var(--text-1)]">{version}</p>
              <p className="text-[11px] text-[var(--text-3)] font-mono">{date}</p>
            </div>
            <p className="text-[11px] text-[var(--text-2)]">{label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function ChecklistFeature() {
  const items = [
    'Parties identifiées (noms, adresses)',
    'Objet du contrat clairement défini',
    'Durée et clause de résiliation',
    'Exceptions et exclusions listées',
    'Signature électronique avec horodatage',
  ]
  return (
    <ul className="mt-2 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 * i }}
          className="flex items-center gap-2"
        >
          <Check size={14} className="text-[var(--accent)] shrink-0" strokeWidth={2} />
          <span className="text-sm text-[var(--text-2)]">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function PdfPreviewFeature() {
  return (
    <div className="mt-2 rounded-lg border border-[var(--border-md)] bg-white p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[var(--surface-2)] flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm border border-[var(--border-md)]" />
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--text-1)]">Contrat NDA.pdf</p>
            <p className="text-[10px] text-[var(--text-3)]">Studio Alpha — 2 pages</p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">Conforme</span>
      </div>
      <div className="space-y-1.5">
        <div className="h-2 bg-[var(--surface-2)] rounded w-full" />
        <div className="h-2 bg-[var(--surface-2)] rounded w-5/6" />
        <div className="h-2 bg-[var(--surface-2)] rounded w-4/5" />
        <div className="h-2 bg-[var(--surface-2)] rounded w-3/4" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-[var(--text-3)]">Expire dans 364j</span>
        <div className="flex -space-x-1">
          {[1, 2, 3].map(n => (
            <div key={n} className="w-5 h-5 rounded-full border-2 border-white bg-[var(--surface-3)] flex items-center justify-center text-[9px] font-bold text-white">{n}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CounterCard() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const total = 60 * 2
    let frame = 0
    const id = setInterval(() => {
      frame++
      const p = 1 - (1 - frame / total) ** 3
      setCount(Math.min((847 - 0) * p, 847))
      if (frame >= total) clearInterval(id)
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="mt-auto pt-3">
      <span className="text-3xl font-bold text-[var(--accent)] tracking-tight">{Math.round(count).toLocaleString()}</span>
      <span className="text-xl font-medium text-[var(--text-1)] ml-1">contrats générés ce mois</span>
    </div>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[var(--surface-1)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium uppercase tracking-widest mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Des outils pensés pour les freelances qui veulent aller vite sans compromis juridique.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Top Row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Large col-span-2: IA */}
            <BentoCard className="md:col-span-2">
              <h3 className="text-base font-semibold text-[var(--text-1)]">IA qui personnalise vos contrats</h3>
              <p className="text-sm text-[var(--text-2)]">
                L'intelligence artificielle adapte chaque clause à votre situation en fonction du type de mission, du client et du cadre juridique.
              </p>
              <div className="mt-4 rounded-lg border border-[var(--border-md)] bg-[var(--surface-2)] p-4 max-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[var(--text-3)]">Génération en cours...</span>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[var(--border-md)] rounded w-3/4" />
                  <div className="h-2 bg-[var(--border-md)] rounded w-1/2" />
                  <div className="h-2 bg-[var(--border-md)] rounded w-5/6" />
                </div>
                <CounterCard />
              </div>
            </BentoCard>

            {/* Card 2 — Metrics */}
            <BentoCard>
              <h3 className="text-base font-semibold text-[var(--text-1)]">Temps économisé</h3>
              <p className="text-sm text-[var(--text-2)]">
                En moyenne par contrat vs. rédaction manuelle.
              </p>
              <MetricsBar metrics={[
                { label: 'Freelance solo', value: 72, suffix: '%' },
                { label: 'Studio design', value: 65, suffix: '%' },
                { label: 'Agence marketing', value: 58, suffix: '%' },
              ]} />
            </BentoCard>
          </div>

          {/* Bottom Row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 4 — Timeline */}
            <BentoCard>
              <h3 className="text-base font-semibold text-[var(--text-1)]">Historique des versions</h3>
              <p className="text-sm text-[var(--text-2)]">
                Chaque modification est horodatée et restaurable. Vous ne perdez plus jamais un document.
              </p>
              <TimelineFeature />
            </BentoCard>

            {/* Card 5 — Checklist + PDF Preview stacked */}
            <BentoCard>
              <h3 className="text-base font-semibold text-[var(--text-1)]">Checklist intégrée</h3>
              <p className="text-sm text-[var(--text-2)] mb-2">
                Chaque contrat est validé sur 12 points essentiels avant signature.
              </p>
              <ChecklistFeature />
              <div className="mt-4">
                <PdfPreviewFeature />
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
