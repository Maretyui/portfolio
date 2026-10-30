import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
}
