import { ProductCanvas, ProductControls } from '@/widgets/product-stage'

export function StagePage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_320px]">
      <section>
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-[var(--text-h)]">Product stage</h1>
          <p className="text-sm text-[var(--text)]">
            Orbit the mesh, change material color, and swap the environment map.
          </p>
        </header>
        <ProductCanvas />
      </section>
      <ProductControls />
    </main>
  )
}
