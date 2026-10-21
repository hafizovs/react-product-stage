import { create } from 'zustand'

import type { ProductShape } from '@/entities/product'
import { normalizeHex } from '@/shared/lib/color-hex'

type ProductStageState = {
  colorHex: string
  shape: ProductShape
  studioEnvironment: boolean
  setColorHex: (value: string) => void
  setShape: (shape: ProductShape) => void
  toggleEnvironment: () => void
}

export const useProductStageStore = create<ProductStageState>((set) => ({
  colorHex: '#38bdf8',
  shape: 'box',
  studioEnvironment: true,
  setColorHex: (value) => {
    const normalized = normalizeHex(value)
    if (normalized) {
      set({ colorHex: normalized })
    }
  },
  setShape: (shape) => set({ shape }),
  toggleEnvironment: () =>
    set((state) => ({ studioEnvironment: !state.studioEnvironment })),
}))
