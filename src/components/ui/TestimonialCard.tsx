import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  avatarColor: string
  className?: string
}

const AVATAR_COLORS: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  amber: 'bg-amber-100 text-amber-700',
  rose: 'bg-rose-100 text-rose-700',
  cyan: 'bg-cyan-100 text-cyan-700',
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
  avatarColor,
  className,
}: TestimonialCardProps) {
  const avatarClass = AVATAR_COLORS[avatarColor] ?? 'bg-gray-100 text-gray-700'

  return (
    <div
      className={cn(
        'flex-shrink-0 w-[380px] p-6 rounded-2xl border border-[var(--border-md)] bg-white flex flex-col gap-4',
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-[var(--accent)]"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--text-1)] leading-relaxed text-sm flex-1 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
            avatarClass
          )}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--text-1)]">{name}</p>
          <p className="text-xs text-[var(--text-2)]">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  )
}
