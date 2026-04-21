'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '12 400+', label: 'contrats générés' },
  { value: '98%', label: 'de satisfaction' },
  { value: '3 min', label: 'temps moyen de création' },
  { value: '100%', label: 'juridiquement valides' },
]

export default function Stats() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-4 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <div className="text-3xl font-semibold text-[var(--text-1)] tracking-tight">{stat.value}</div>
            <div className="text-sm text-[var(--text-2)] font-medium mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
