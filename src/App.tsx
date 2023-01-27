import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import './App.css'

function Box() {

  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    boxRef.current.rotation.x += 0.005
    boxRef.current.rotation.y += 0.01
  })

  

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function ThreeScene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Box/>
    </Canvas>
  )
}

function App() {

  return (
    <div className="App">
      <ThreeScene />
    </div>
  )
}

export default App
