import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Clauso — Contrats juridiques simplifiés pour freelances',
  description:
    'Générez, signez et archivez vos NDAs, contrats client et lettres de mission en minutes. Templates validés par des avocats, zéro expertise juridique requise.',
  openGraph: {
    title: 'Clauso — Contrats juridiques simplifiés',
    description:
      'Générez, signez et archivez vos contrats en minutes. Zéro expertise juridique requise.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={dmSans.className}>
      <body className="bg-[var(--bg)] text-[var(--text-1)] antialiased">
        {children}
      </body>
    </html>
  )
}
