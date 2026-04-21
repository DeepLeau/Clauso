'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center transition-all duration-200 ${
          scrolled
            ? 'border-b border-[var(--border-md)] bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-[var(--text-1)]">
              Clauso
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-2)]">
            <a href="#features" className="hover:text-[var(--text-1)] transition-colors duration-150 flex items-center gap-1">
              Fonctionnalités
            </a>
            <a href="#pricing" className="hover:text-[var(--text-1)] transition-colors duration-150 flex items-center gap-1">
              Tarifs
            </a>
            <a href="#faq" className="hover:text-[var(--text-1)] transition-colors duration-150">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-150 hidden sm:block px-3 h-9"
            >
              Connexion
            </a>
            <a
              href="/signup"
              className="h-9 px-5 flex items-center justify-center rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white text-sm font-semibold transition-all duration-150 shadow-sm"
            >
              Essai gratuit
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-xl flex flex-col p-6 md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end w-9 h-9 flex items-center justify-center text-[var(--text-2)] hover:text-[var(--text-1)] mb-6"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              <nav className="flex flex-col gap-1">
                {[
                  { href: '#features', label: 'Fonctionnalités' },
                  { href: '#pricing', label: 'Tarifs' },
                  { href: '#faq', label: 'FAQ' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-1)] rounded-lg transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <a href="#" className="h-10 px-4 flex items-center justify-center rounded-lg border border-[var(--border-md)] text-sm font-medium text-[var(--text-2)] hover:bg-[var(--surface-1)] transition-colors">
                  Connexion
                </a>
                <a href="/signup" className="h-10 px-4 flex items-center justify-center rounded-lg bg-[var(--accent)] text-white text-sm font-semibold">
                  Essai gratuit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
