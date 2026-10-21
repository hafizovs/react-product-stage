import { useProductStageStore } from '@/features/pick-product-color/model/product-stage-store'
import { isValidHex } from '@/shared/lib/color-hex'

const swatches = ['#38bdf8', '#f472b6', '#fbbf24', '#34d399', '#a78bfa', '#f87171']

export function ColorPicker() {
  const colorHex = useProductStageStore((s) => s.colorHex)
  const setColorHex = useProductStageStore((s) => s.setColorHex)

  return (
    <div className="space-y-3">
      <label className="flex flex-col gap-1 text-sm text-[var(--text)]">
        Material color
        <div className="flex items-center gap-2">
          <input
            aria-label="Pick color"
            className="h-9 w-12 cursor-pointer rounded border border-[var(--border)] bg-transparent"
            onChange={(event) => setColorHex(event.target.value)}
            type="color"
            value={colorHex}
          />
          <input
            aria-label="Hex color"
            className="h-9 flex-1 rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 font-mono text-sm text-[var(--text-h)]"
            onChange={(event) => setColorHex(event.target.value)}
            value={colorHex}
          />
        </div>
        {!isValidHex(colorHex) ? (
          <span className="text-xs text-red-400">Enter a valid #RGB or #RRGGBB value.</span>
        ) : null}
      </label>
      <div className="flex flex-wrap gap-2">
        {swatches.map((swatch) => (
          <button
            key={swatch}
            aria-label={`Use ${swatch}`}
            className="h-8 w-8 rounded-full border-2 border-[var(--border)] ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-border)]"
            onClick={() => setColorHex(swatch)}
            style={{ backgroundColor: swatch }}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}
