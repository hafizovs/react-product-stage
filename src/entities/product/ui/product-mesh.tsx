import type { ProductShape } from '@/entities/product/model/types'

type ProductMeshProps = {
  shape: ProductShape
  colorHex: string
}

export function ProductMesh({ shape, colorHex }: ProductMeshProps) {
  return (
    <mesh castShadow receiveShadow>
      {shape === 'box' ? (
        <boxGeometry args={[1.4, 1.4, 1.4]} />
      ) : (
        <sphereGeometry args={[0.85, 64, 64]} />
      )}
      <meshStandardMaterial color={colorHex} metalness={0.35} roughness={0.25} />
    </mesh>
  )
}
