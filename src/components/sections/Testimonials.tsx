'use client'

import { motion } from 'framer-motion'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const testimonials = [
  { name: 'Sophie Martin', role: 'Freelance design', company: 'Studio indépendant', quote: 'Avant Clauso, je passais 3h à négocier chaque contrat. Maintenant, je signe en 5 minutes et je peux me concentrer sur mon vrai travail.', initials: 'SM', avatarColor: 'bg-blue-100 text-blue-700' },
  { name: 'Thomas Lefèvre', role: 'Développeur web', company: 'Freelance', quote: 'Le NDA était mon ennemi juré. Avec Clauso, j\'ai enfin un document que mes clients prennent au sérieux — et qui me protège vraiment.', initials: 'TL', avatarColor: 'bg-emerald-100 text-emerald-700' },
  { name: 'Camille Durand', role: 'Directrice créative', company: 'Studio Croissant', quote: 'On génère 15 contrats par mois. Clauso nous fait gagner un temps fou et on n\'a plus jamais de litige en fin de projet.', initials: 'CD', avatarColor: 'bg-violet-100 text-violet-700' },
  { name: 'Marc Petit', role: 'Consultant SEO', company: 'Agence Croissant', quote: 'La clause de résiliation était toujours un combat. Clauso l\'a standardisée — mes clients adorent la clarté, moi aussi.', initials: 'MP', avatarColor: 'bg-amber-100 text-amber-700' },
  { name: 'Léa Rousseau', role: ' UX designer', company: 'Studio Indigo', quote: 'Le suivi des contrats был mon cauchemar. Maintenant j\'ai tout archivé et accessible en un clic. Bye bye les emails perdus.', initials: 'LR', avatarColor: 'bg-rose-100 text-rose-700' },
  { name: 'Julien Moreau', role: 'Lead developer', company: 'Agence Croissant', quote: 'La signature électronique intégrée, c\'est le truc qui m\'a convaincu. Plus de papier, plus de scanner, plus de délai postal.', initials: 'JM', avatarColor: 'bg-cyan-100 text-cyan-700' },
]

const slots = [testimonials, testimonials, testimonials]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mb-4">
            Ils ont arrêté de stresser pour leurs contrats
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
            Des freelances et des petites équipes qui ont adopté Clauso et ne reviennent plus en arrière.
          </p>
        </motion.div>

        {/* Gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="relative flex flex-col gap-4">
          <AnimatedCanopy reverse={false} className="marquee-root">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </AnimatedCanopy>
          <AnimatedCanopy reverse={true} className="marquee-root">
            {testimonials.map(t => <TestimonialCard key={`b-${t.name}`} {...t} />)}
          </AnimatedCanopy>
          <AnimatedCanopy reverse={false} className="marquee-root">
            {testimonials.map(t => <TestimonialCard key={`c-${t.name}`} {...t} />)}
          </AnimatedCanopy>
        </div>
      </div>
    </section>
  )
}
