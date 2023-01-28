import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import threejsLogo from './assets/threejs.svg'
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
      <div className='flex flex-col justify-center items-center gap-4 mt-10'>
        <h1 className='font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400'>Vite + React-Ts-3D</h1>
        <div className='flex justify-center items-center gap-4'>
          <img src={viteLogo} className='h-12 w-12' alt='vite' />
          <img src={reactLogo} className='h-12 w-12' alt='react' />
          <img src={threejsLogo} className='h-12 w-12' alt='threejs' />
        </div>
      </div>
      <ThreeScene />
    </div>
  )
}

export default App
