'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const profiles = [
  {
    initials: 'FL',
    color: 'bg-emerald-100 text-emerald-700',
    label: 'Freelance Solo',
    contracts: '5-10',
    timeSaved: '4h',
    quote: 'Je signe mes NDAs en 3 clics. Avant, je perdais une demi-journée à chaque fois.',
    stats: [
      { label: 'contrats/mois', value: '5-10' },
      { label: 'économisées/semaine', value: '4h' },
    ],
  },
  {
    initials: 'SD',
    color: 'bg-blue-100 text-blue-700',
    label: 'Studio Design',
    contracts: '10-20',
    timeSaved: '8h',
    quote: 'On gère tous nos contrats client sans externaliser. Plus besoin de passer par un avocat pour chaque projet.',
    stats: [
      { label: 'contrats/mois', value: '10-20' },
      { label: 'économisées/semaine', value: '8h' },
    ],
  },
  {
    initials: 'AM',
    color: 'bg-violet-100 text-violet-700',
    label: 'Agence Marketing',
    contracts: '20+',
    timeSaved: '12h',
    quote: 'La clause de résiliation, c\'est ça qui nous manquait. Avant on avait toujours des litiges en fin de projet.',
    stats: [
      { label: 'contrats/mois', value: '20+' },
      { label: 'économisées/semaine', value: '12h' },
    ],
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % profiles.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

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
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Clauso s&apos;adapte à votre profil
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Que vous soyez freelance solo ou agence de 10 personnes, Clauso s&apos;ajuste à votre volume et à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              animate={{
                scale: active === i ? 1.02 : 1,
                borderColor: active === i ? 'rgb(5, 150, 105)' : 'rgb(228, 228, 231)',
              }}
              className="bg-white rounded-2xl border-2 p-8 cursor-pointer transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-full ${profile.color} flex items-center justify-center text-xl font-bold mb-6 mx-auto`}>
                {profile.initials}
              </div>
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-1)] mb-1">{profile.label}</h3>
                <p className="text-sm text-[var(--text-2)]">
                  {profile.contracts} contrats/mois
                </p>
              </div>

              <div className="flex justify-center gap-6 mb-6">
                {profile.stats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[var(--accent)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-3)]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[var(--text-2)] italic text-center leading-relaxed">
                &ldquo;{profile.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
