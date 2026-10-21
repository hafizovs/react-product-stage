const HEX_SHORT = /^#([0-9a-fA-F]{3})$/
const HEX_FULL = /^#([0-9a-fA-F]{6})$/

/** Normalize #RGB / #RRGGBB to lowercase #rrggbb. Returns null if invalid. */
export function normalizeHex(input: string): string | null {
  const trimmed = input.trim()
  const short = HEX_SHORT.exec(trimmed)
  if (short) {
    const [r, g, b] = short[1]!.split('')
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase()
  }
  const full = HEX_FULL.exec(trimmed)
  if (full) {
    return `#${full[1]!.toLowerCase()}`
  }
  return null
}

export function isValidHex(input: string): boolean {
  return normalizeHex(input) !== null
}
