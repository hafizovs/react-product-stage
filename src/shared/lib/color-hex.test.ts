import { describe, expect, it } from 'vitest'

import { isValidHex, normalizeHex } from './color-hex'

describe('normalizeHex', () => {
  it('expands shorthand hex', () => {
    expect(normalizeHex('#f0a')).toBe('#ff00aa')
  })

  it('lowercases full hex', () => {
    expect(normalizeHex('#AABBCC')).toBe('#aabbcc')
  })

  it('rejects invalid values', () => {
    expect(normalizeHex('red')).toBeNull()
    expect(normalizeHex('#gggggg')).toBeNull()
  })
})

describe('isValidHex', () => {
  it('accepts normalized forms', () => {
    expect(isValidHex('#abc')).toBe(true)
    expect(isValidHex('#aabbcc')).toBe(true)
  })
})
