'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const contracts = [
  { name: 'Contrat client — Studio Alpha', client: 'Studio Alpha', status: 'Brouillon', statusColor: 'bg-yellow-100 text-yellow-700', date: '14 jan.' },
  { name: 'NDA — Agence Croissant', client: 'Agence Croissant', status: 'En attente', statusColor: 'bg-blue-100 text-blue-700', date: '12 jan.' },
  { name: 'Lettre de mission — Éclaire', client: 'Éclaire Studio', status: 'Signé', statusColor: 'bg-green-100 text-green-700', date: '10 jan.' },
  { name: 'Contrat freelance — Bloom', client: 'Bloom Agency', status: 'Brouillon', statusColor: 'bg-yellow-100 text-yellow-700', date: '09 jan.' },
  { name: 'NDA — NovaTech', client: 'NovaTech SAS', status: 'Signé', statusColor: 'bg-green-100 text-green-700', date: '07 jan.' },
  { name: 'Contrat client — Lumière', client: 'Lumière Studio', status: 'En attente', statusColor: 'bg-blue-100 text-blue-700', date: '05 jan.' },
]

export function Hero() {
  const [signed, setSigned] = useState(false)
  const [contractsCount, setContractsCount] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Counter animation
  useEffect(() => {
    const target = 847
    const totalFrames = 90
    let frame = 0
    intervalRef.current = setInterval(() => {
      frame++
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setContractsCount(Math.round(eased * target))
      if (frame >= totalFrames && intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }, 22)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  // Signature simulation
  useEffect(() => {
    const t = setTimeout(() => setSigned(true), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="pt-6 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Dark Container with Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#11382F] rounded-[2.5rem] pt-20 pb-48 md:pb-72 px-6 text-center relative overflow-hidden hero-grid"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-slate-300 mb-10 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <span className="opacity-80">Bêta publique</span>
            <span className="text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              En savoir plus <ArrowRight className="w-3 h-3" />
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto relative z-10">
            Des contrats parfaits,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">sans avocat.</span>
              {/* Green Scribble Underline */}
              <svg
                className="absolute w-[110%] -bottom-4 -left-2 text-[var(--accent)] opacity-80"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C30 8 70 5 100 8C130 11 160 15 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-300/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Générez, signez et archivez vos contrats en minutes.{' '}
            <span className="text-slate-300">
              Zéro expertise juridique requise.
            </span>
          </p>

          {/* Input Field Design */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-md mx-auto mb-20 relative z-20"
          >
            <div className="bg-white/5 border border-white/10 rounded-full p-1.5 flex items-center backdrop-blur-md shadow-lg group focus-within:ring-2 focus-within:ring-[var(--accent)]/20 focus-within:border-[var(--accent)]/30 transition-all">
              <input
                type="email"
                placeholder="Votre email pro"
                className="bg-transparent border-none text-white placeholder-slate-400/70 text-sm w-full pl-5 pr-4 focus:outline-none focus:ring-0 h-10"
              />
              <a
                href="/signup"
                className="bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all whitespace-nowrap flex items-center justify-center"
              >
                Commencer
              </a>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-3 relative z-20"
          >
            <div className="flex -space-x-2">
              {['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#11382F] flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: color, zIndex: 5 - i }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 font-medium">
              2 400+ freelances actifs
            </p>
          </motion.div>

          {/* Dashboard Mockup (Overlapping) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 md:-bottom-40 w-full max-w-[70rem] px-4 z-10">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
              {/* Dashboard UI */}
              <div className="flex h-[450px] md:h-[600px] bg-white">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-56 border-r border-slate-100 p-6 bg-slate-50/50">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Mes contrats
                  </div>
                  <div className="space-y-1 mb-8">
                    {/* Active nav */}
                    <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 bg-white shadow-sm border border-slate-100 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      Tous les contrats
                    </div>
                    {/* Other nav items */}
                    {[
                      { label: 'NDAs', count: 3 },
                      { label: 'Contrats client', count: 8 },
                      { label: 'Lettres de mission', count: 2 },
                    ].map(({ label, count }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{label}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats mini */}
                  <div className="mt-auto space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <p className="text-[10px] text-slate-400 mb-1">Contrats ce mois</p>
                      <p className="text-xl font-semibold text-slate-800 tracking-tight">
                        {contractsCount.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <p className="text-[10px] text-slate-400 mb-1">En attente de signature</p>
                      <p className="text-xl font-semibold text-slate-800 tracking-tight">3</p>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-8 bg-slate-50/30 overflow-hidden flex flex-col gap-6">
                  {/* Top Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-1/2">
                    {/* Chart 1: Contracts by status */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5 relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Répartition par statut
                        </div>
                        <div className="text-3xl font-semibold text-slate-800 tracking-tight">24</div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        {[
                          { label: 'Brouillon', color: '#F59E0B', pct: 38 },
                          { label: 'En attente', color: '#3B82F6', pct: 33 },
                          { label: 'Signé', color: '#10B981', pct: 29 },
                        ].map(({ label, color, pct }) => (
                          <div key={label} className="flex-1">
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-slate-500">{label}</span>
                              <span className="text-slate-700 font-medium">{pct}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${pct}%`,
                                  backgroundColor: color,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chart 2: Donut chart */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Volume mensuel
                          </div>
                          <div className="text-3xl font-semibold text-slate-800 tracking-tight">847</div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center gap-6">
                        <div
                          className="relative w-28 h-28 rounded-full border-[12px] border-slate-100"
                          style={{
                            background:
                              'conic-gradient(#059669 0% 35%, #3B82F6 35% 58%, #F59E0B 58% 78%, #EF4444 78% 100%)',
                            mask: 'radial-gradient(transparent 55%, black 56%)',
                            WebkitMask: 'radial-gradient(transparent 55%, black 56%)',
                          }}
                        />
                        <div className="space-y-2 text-[10px] font-medium text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" /> NDAs
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500" /> Contrats
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-amber-500" /> Missions
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500" /> Autres
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart 3: Avg time */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5 flex flex-col gap-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Temps moyen de création
                      </div>
                      <div className="flex-1 flex flex-col justify-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full border-4 border-[var(--accent)] border-t-slate-100 flex items-center justify-center text-xs font-bold text-[var(--accent)]">
                            3min
                          </div>
                          <div>
                            <div className="text-[10px] text-slate-400">vs 3h en manuel</div>
                            <div className="text-sm font-semibold text-[var(--accent)]">
                              −98% de temps
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full border-4 border-red-400 border-r-slate-100 flex items-center justify-center text-xs font-bold text-red-500">
                            0€
                          </div>
                          <div>
                            <div className="text-[10px] text-slate-400">vs 500€ avocat</div>
                            <div className="text-sm font-semibold text-[var(--accent)]">
                              100% économique
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-1/2">
                    {/* Contract Signature Widget */}
                    <div className="md:col-span-2 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Signature rapide
                        </div>
                      </div>
                      <div className="my-3">
                        <p className="text-xs text-slate-700 font-medium mb-1">Contrat NDA — Studio Alpha</p>
                        <p className="text-[10px] text-slate-400 mb-3">
                          2 parties · 3 clauses · Valide 2 ans
                        </p>
                        {/* Signature field */}
                        <div className="border border-dashed border-slate-200 rounded-lg p-3 text-center">
                          <p className="text-[10px] text-slate-400 mb-1">Signature</p>
                          <p className="text-xs text-slate-500 italic">
                            {signed ? 'Marie L.' : 'Dessinez ou cliquez signer'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {!signed ? (
                          <button className="flex-1 h-8 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold hover:bg-[var(--accent-hi)] transition-colors">
                            Signer maintenant
                          </button>
                        ) : (
                          <div className="flex-1 h-8 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs font-semibold flex items-center justify-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Signé et archivé
                          </div>
                        )}
                        <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M6 18h.01M18 6h.01M18 18h.01" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Contracts List */}
                    <div className="md:col-span-3 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5">
                      <div className="flex justify-between mb-4">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Contrats récents
                        </div>
                        <button className="text-[10px] text-[var(--accent)] hover:text-[var(--accent-hi)] font-medium transition-colors">
                          Voir tout →
                        </button>
                      </div>
                      <div className="space-y-3">
                        {contracts.slice(0, 4).map((contract, i) => (
                          <div key={i} className="grid grid-cols-4 items-center text-xs text-slate-600">
                            <div className="flex items-center gap-2 col-span-2">
                              <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 flex-shrink-0">
                                {contract.name[0]}
                              </div>
                              <div className="min-w-0">
                                <div className="text-slate-700 truncate text-xs font-medium">
                                  {contract.name}
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center">
                              <span className={cn(
                                'text-[10px] px-2 py-0.5 rounded-full font-medium',
                                contract.statusColor
                              )}>
                                {contract.status}
                              </span>
                            </div>
                            <div className="text-right text-[10px] text-slate-400">
                              {contract.date}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
