import Link from 'next/link'

const footerLinks = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Templates', href: '#features' },
    { label: 'Blog', href: '#' },
  ],
  Ressources: [
    { label: 'Centre d\'aide', href: '#' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:contact@clauso.fr' },
    { label: 'Statut', href: '#' },
  ],
  Légal: [
    { label: 'CGU', href: '#' },
    { label: 'Confidentialité', href: '#' },
    { label: 'Mentions légales', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--surface-1)] border-t border-[var(--border-md)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo C mark */}
              <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-white text-sm font-bold leading-none">C</span>
              </div>
              <span className="text-base font-semibold text-[var(--text-1)] tracking-tight">
                Clauso
              </span>
            </div>
            <p className="text-xs text-[var(--text-2)] leading-relaxed max-w-[220px]">
              Le juridique simplifié pour les freelances, studios et agences. Des contrats parfaits, sans avocat.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-[var(--text-1)] uppercase tracking-wider mb-4">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[var(--text-3)]">
            © 2025 Clauso. Tous droits réservés.
          </p>

          {/* Social links — SVG inline (no brand icons in lucide-react) */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href="https://twitter.com/clauso"
              aria-label="Clauso sur X (Twitter)"
              className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/clauso"
              aria-label="Clauso sur LinkedIn"
              className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/clauso"
              aria-label="Clauso sur GitHub"
              className="text-[var(--text-3)] hover:text-[var(--text-1)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
