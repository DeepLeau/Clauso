import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  monthlyPrice: number
  annualPrice: number
  period: string
  features: string[]
  isPopular?: boolean
  isAnnual: boolean
  onSelect: () => void
  ctaLabel: string
}

export function PricingCard({
  name,
  monthlyPrice,
  annualPrice,
  period,
  features,
  isPopular = false,
  isAnnual,
  onSelect,
  ctaLabel,
}: PricingCardProps) {
  const displayPrice = isAnnual ? annualPrice : monthlyPrice

  return (
    <div
      className={cn(
        'relative rounded-2xl p-8 flex flex-col gap-5 transition-all',
        isPopular
          ? 'bg-[var(--surface-1)] border-2 border-[var(--accent)] shadow-[0_0_32px_rgba(5,150,105,0.08)]'
          : 'bg-white border border-[var(--border-md)]'
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-0.5 rounded-full bg-[var(--accent)] text-white text-[11px] font-medium">
            Populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <div>
        <p className="text-xs font-bold text-[var(--text-3)] uppercase tracking-wider mb-1">
          {name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-semibold text-[var(--text-1)] tracking-tight">
            {displayPrice === 0 ? 'Gratuit' : `${displayPrice}€`}
          </span>
          {displayPrice !== 0 && (
            <span className="text-[var(--text-2)] text-sm mb-1.5">
              /{period}
            </span>
          )}
        </div>
        {isAnnual && monthlyPrice > 0 && (
          <p className="text-xs text-[var(--accent)] mt-1 font-medium">
            Soit {annualPrice}€/mois facturé annuellement
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        onClick={onSelect}
        className={cn(
          'h-10 rounded-lg text-xs font-semibold transition-colors',
          isPopular
            ? 'bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white'
            : 'bg-[var(--text-1)] hover:bg-[var(--surface-3)] text-white'
        )}
      >
        {ctaLabel}
      </button>

      {/* Features */}
      <ul className="flex flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-xs text-[var(--text-2)]">
            <Check
              size={13}
              strokeWidth={2}
              className="text-[var(--accent)] shrink-0"
            />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
