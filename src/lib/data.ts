// ─── Types ──────────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  avatarColor: string
}

export type Feature = {
  id: string
  title: string
  description: string
  type: 'counter' | 'metrics' | 'timeline' | 'checklist' | 'typing' | 'preview'
  colSpan?: 2
}

export type UseCase = {
  profile: string
  contractsPerMonth: number
  timeSaved: number
  quote: string
  initials: string
}

export type PricingPlan = {
  id: string
  name: string
  monthlyPrice: number
  annualPrice: number
  contractsLimit: string
  features: string[]
  isPopular: boolean
}

export type FaqEntry = {
  question: string
  answer: string
}

export type ComparisonRow = {
  criterion: string
  clauso: string
  docusign: string
  manual: string
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: 'Marie Lefèvre',
    role: 'Consultante SEO',
    company: 'Indépendante',
    quote: 'Avant Clauso, je perdais 2h par semaine à négocier mes contrats. Maintenant je signe en 5 minutes.',
    initials: 'ML',
    avatarColor: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Thomas Bernard',
    role: 'Designer UI/UX',
    company: 'Studio Pixel',
    quote: 'Mes clients me disent que mes contrats ont l\'air professionnels. Ça change la relation dès le départ.',
    initials: 'TB',
    avatarColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Sophie Martin',
    role: 'Développeuse freelance',
    company: 'CodeSnap',
    quote: 'J\'ai arrêté de stresser avant chaque signature. Clauso me donne la confiance que tout est en ordre.',
    initials: 'SM',
    avatarColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Antoine Dupont',
    role: 'Consultant CRM',
    company: 'OptiFlow',
    quote: 'Le template NDA a закрыл un client qui hésitait depuis des semaines. Retour rapide, professionnalisme immédiat.',
    initials: 'AD',
    avatarColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Camille Rousseau',
    role: 'Photographe',
    company: 'Camille Photo',
    quote: 'Je gère enfin mes contrats shoots sans demander à mon avocat. Merci Clauso pour la liberté.',
    initials: 'CR',
    avatarColor: 'bg-rose-100 text-rose-700',
  },
  {
    name: 'Julien Morel',
    role: 'Stratégiste digital',
    company: 'GrowthLab',
    quote: 'Mes lettres de mission sont impeccables. Chaque client comprend exactement ce qu\'il signe.',
    initials: 'JM',
    avatarColor: 'bg-cyan-100 text-cyan-700',
  },
]

// ─── Features ────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    id: 'ai-personalization',
    title: 'Personnalisation par IA',
    description: 'L\'IA adapte chaque contrat à votre métier en analysant vos réponses en quelques secondes.',
    type: 'typing',
    colSpan: 2,
  },
  {
    id: 'contracts-counter',
    title: 'Contrats générés',
    description: 'Plus de 12 000 contrats créés depuis le lancement. Zéro litige lié à un template.',
    type: 'counter',
  },
  {
    id: 'signatures',
    title: 'Signature électronique',
    description: 'Processus de signature intégré, traçable et juridiquement opposable en cas de litige.',
    type: 'preview',
  },
  {
    id: 'time-saved',
    title: 'Temps économisé',
    description: 'En moyenne, 3h de travail administratif évitées par mois pour chaque freelance.',
    type: 'metrics',
  },
  {
    id: 'versions',
    title: 'Historique des versions',
    description: 'Chaque modification est archivée. Vous pouvez retrouver n\'importe quelle version en 2 clics.',
    type: 'timeline',
  },
  {
    id: 'checklist',
    title: 'Checklist de validation',
    description: 'Avant envoi, un récapitulatif vérifie que tous les éléments essentiels sont présents.',
    type: 'checklist',
  },
]

// ─── Use Cases ──────────────────────────────────────────────────────────────

export const useCases: UseCase[] = [
  {
    profile: 'Freelance solo',
    contractsPerMonth: 8,
    timeSaved: 3,
    quote: 'Je génère mes devis et contrats en 10 minutes au lieu de 2 heures chaque semaine.',
    initials: 'FC',
  },
  {
    profile: 'Studio design',
    contractsPerMonth: 18,
    timeSaved: 7,
    quote: 'Nos 4 designers utilisent Clauso pour les projets clients. Plus de pertes entre les missions.',
    initials: 'ST',
  },
  {
    profile: 'Agence marketing',
    contractsPerMonth: 35,
    timeSaved: 12,
    quote: 'On gère 30+ contrats mensuels sans jamais rater une échéance ou une clause importante.',
    initials: 'AG',
  },
]

// ─── Pricing Plans ──────────────────────────────────────────────────────────

export const pricingPlans: PricingPlan[] = [
  {
    id: 'solo',
    name: 'Solo',
    monthlyPrice: 29,
    annualPrice: 23,
    contractsLimit: '10 contrats / mois',
    features: [
      '10 contrats / mois',
      'Tous les templates',
      'Signature électronique',
      'Archivage 2 ans',
      '1 utilisateur',
      'Support email',
    ],
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 79,
    annualPrice: 63,
    contractsLimit: '50 contrats / mois',
    features: [
      '50 contrats / mois',
      'Templates premium',
      'Signature électronique',
      'Archivage illimité',
      '1 utilisateur',
      'Personnalisation IA',
      'Support prioritaire',
    ],
    isPopular: true,
  },
  {
    id: 'studio',
    name: 'Studio',
    monthlyPrice: 199,
    annualPrice: 159,
    contractsLimit: 'Contrats illimités',
    features: [
      'Contrats illimités',
      'Tous les templates',
      'Signature électronique',
      'Archivage illimité',
      '5 utilisateurs',
      'Personnalisation IA',
      'Multi-espace de travail',
      'Support dédié',
    ],
    isPopular: false,
  },
]

// ─── FAQ ───────────────────────────────────────────────────────────────────

export const faqEntries: FaqEntry[] = [
  {
    question: 'Les contrats Clauso sont-ils juridiquement valides ?',
    answer: 'Oui. Tous nos templates ont été rédigés et validés par des avocats spécialisés en droit des affaires et en propriété intellectuelle. Ils respectent la réglementation française et européenne sur la signature électronique (eIDAS). En cas de litige, un tribunal reconnaitra un contrat signé via Clauso au même titre qu\'un contrat signé sur papier.',
  },
  {
    question: 'Combien de temps faut-il pour signer un contrat ?',
    answer: 'En moyenne, le processus complet — de la sélection du template à la signature par toutes les parties — prend moins de 15 minutes. La signature électronique est réceptionnée en temps réel et le contrat est archivé instantanément.',
  },
  {
    question: 'Puis-je intégrer Clauso à mes outils existants ?',
    answer: 'Clauso propose des intégrations avec Notion, Google Drive, Slack et Zapier. Nous trabajamos sur une intégration direct avec HubSpot et Pipedrive pour le premier trimestre 2025.',
  },
  {
    question: 'Puis-je modifier un contrat après signature ?',
    answer: 'Une fois un contrat signé par toutes les parties, il est verrouillé et archivé en l\'état. Pour toute modification, vous devez créer un avenant signé par les mêmes parties. L\'historique des versions reste accessible depuis votre tableau de bord.',
  },
  {
    question: 'Y a-t-il une période d\'essai gratuite ?',
    answer: 'Oui. Chaque nouveau compte commence avec 14 jours d\'essai gratuit, sans carte bancaire requise. Vous avez accès à l\'ensemble des fonctionnalités Pro pendant cette période.',
  },
  {
    question: 'Comment exporter mes contrats signés ?',
    answer: 'Chaque contrat archivé peut être téléchargé en PDF à tout moment depuis votre espace Clauso. Vous pouvez également configurer une exportation automatique vers Google Drive ou Notion à chaque signature.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Clauso chiffre l\'ensemble des données en transit (TLS 1.3) et au repos (AES-256). Nos serveurs sont hébergés en Europe (France) et certifiés SOC 2 Type II. Les contrats sont хранимы avec un niveau de sécurité comparable à celui d\'un coffre de banque en ligne.',
  },
  {
    question: 'Comment résilier mon abonnement ?',
    answer: 'Vous pouvez résilier à tout moment depuis votre espace Paramètres, sans frais ni pénalités. Votre abonnement reste actif jusqu\'à la fin de la période facturée. Vos contrats archivés restent accessibles en lecture pendant 30 jours après résiliation.',
  },
]

// ─── Comparison ─────────────────────────────────────────────────────────────

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: 'Temps de création',
    clauso: '5 minutes',
    docusign: '30 minutes',
    manual: '2 à 4 heures',
  },
  {
    criterion: 'Coût par contrat',
    clauso: 'Inclus dans l\'abonnement',
    docusign: '0,50 € à 2 € par envoi',
    manual: '30 à 150 € (avocat ou template)',
  },
  {
    criterion: 'Validité juridique',
    clauso: '✓ Conforme eIDAS',
    docusign: '✓ Conforme eIDAS',
    manual: 'Variable — risque sans validation',
  },
  {
    criterion: 'Templates spécialisés',
    clauso: '✓ NDA, contrats client, lettres de mission',
    docusign: 'Template générique — adaptation manuelle',
    manual: 'Aucun — construction from scratch',
  },
  {
    criterion: 'Support réactif',
    clauso: '✓ Chat intégré, réponse sous 4h',
    docusign: 'Support standard, délai 24-48h',
    manual: 'Aucun — à votre charge',
  },
]
