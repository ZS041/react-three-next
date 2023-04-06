import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import dynamic from 'next/dynamic'

const Stars = dynamic(() => import('@/components/canvas/Stars'), { ssr: false })

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <Stars />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
