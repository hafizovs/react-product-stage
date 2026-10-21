import { useProductStageStore } from '@/features/pick-product-color/model/product-stage-store'
import type { ProductShape } from '@/entities/product'
import { Button } from '@/shared/ui/button'

const shapes: ProductShape[] = ['box', 'sphere']

export function ShapeToggle() {
  const shape = useProductStageStore((s) => s.shape)
  const setShape = useProductStageStore((s) => s.setShape)

  return (
    <div className="flex gap-2">
      {shapes.map((item) => (
        <Button
          key={item}
          aria-pressed={shape === item}
          onClick={() => setShape(item)}
          variant={shape === item ? 'default' : 'outline'}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}
