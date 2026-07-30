import { EffectComposer, Bloom } from '@react-three/postprocessing'

export function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.85} intensity={0.55} radius={0.4} />
    </EffectComposer>
  )
}
