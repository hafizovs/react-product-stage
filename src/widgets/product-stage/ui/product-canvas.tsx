import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { ProductMesh } from '@/entities/product'
import { useProductStageStore } from '@/features/pick-product-color'

function StageScene() {
  const colorHex = useProductStageStore((s) => s.colorHex)
  const shape = useProductStageStore((s) => s.shape)
  const studioEnvironment = useProductStageStore((s) => s.studioEnvironment)

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight castShadow intensity={1.2} position={[4, 6, 3]} />
      <Suspense fallback={null}>
        <ProductMesh colorHex={colorHex} shape={shape} />
        {studioEnvironment ? (
          <Environment preset="studio" />
        ) : (
          <Environment preset="warehouse" />
        )}
      </Suspense>
      <ContactShadows blur={2.5} opacity={0.45} position={[0, -0.75, 0]} scale={8} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.05} minDistance={2} maxDistance={6} />
    </>
  )
}

export function ProductCanvas() {
  return (
    <div className="h-[min(360px,48svh)] w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-[var(--border)] bg-slate-950 sm:h-[min(440px,52svh)] md:h-[min(480px,56svh)] lg:h-[min(520px,60vh)]">
      <Canvas
        className="!block h-full w-full max-w-full touch-none"
        camera={{ position: [2.4, 1.6, 2.8], fov: 45 }}
        dpr={[1, 1.75]}
        shadows
      >
        <StageScene />
      </Canvas>
    </div>
  )
}
