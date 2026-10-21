import { useProductStageStore } from '@/features/pick-product-color/model/product-stage-store'
import { Button } from '@/shared/ui/button'

export function EnvironmentToggle() {
  const studioEnvironment = useProductStageStore((s) => s.studioEnvironment)
  const toggleEnvironment = useProductStageStore((s) => s.toggleEnvironment)

  return (
    <Button onClick={toggleEnvironment} variant="outline">
      Environment: {studioEnvironment ? 'Studio' : 'Neutral'}
    </Button>
  )
}
