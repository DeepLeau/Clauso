import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine clsx class conditions with tailwind-merge for deduplication.
 * Prefer this utility over raw clsx() or template literals for conditional Tailwind classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs).concat(twMerge(clsx(inputs)))
}
