import { ProductCanvas, ProductControls } from '@/widgets/product-stage'

export function StagePage() {
  return (
    <main className="mx-auto grid w-full min-w-0 max-w-6xl gap-4 px-3 py-6 sm:gap-6 sm:px-4 sm:py-8 md:grid-cols-[minmax(0,1fr)_min(280px,36%)] md:items-start lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="min-w-0">
        <header className="mb-3 sm:mb-4">
          <h1 className="text-xl font-semibold tracking-tight text-[var(--text-h)] sm:text-2xl">
            Product stage
          </h1>
          <p className="text-sm leading-relaxed text-[var(--text)]">
            Orbit the mesh, change material color, and swap the environment map.
          </p>
        </header>
        <ProductCanvas />
      </section>
      <ProductControls />
    </main>
  )
}
