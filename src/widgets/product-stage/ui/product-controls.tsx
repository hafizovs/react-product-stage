import { ColorPicker } from '@/features/pick-product-color'
import { ShapeToggle } from '@/features/pick-product-shape'
import { EnvironmentToggle } from '@/features/toggle-environment'

export function ProductControls() {
  return (
    <aside className="flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
      <div>
        <h2 className="text-sm font-semibold text-[var(--text-h)]">Shape</h2>
        <p className="mb-2 text-xs text-[var(--text)]">Switch between box and sphere mesh.</p>
        <ShapeToggle />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text-h)]">Material</h2>
        <p className="mb-2 text-xs text-[var(--text)]">Pick a color for the product surface.</p>
        <ColorPicker />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text-h)]">Lighting</h2>
        <p className="mb-2 text-xs text-[var(--text)]">Toggle HDRI environment preset.</p>
        <EnvironmentToggle />
      </div>
    </aside>
  )
}
