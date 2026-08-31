import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Edges } from '@react-three/drei';
import * as THREE from 'three';

// Detect WebGL support
function detectWebGLContext() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Interactive Particle Field
function FloatingParticles({ count = 80 }) {
  const pointsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    }
  });

  const tempParticles = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 8;
    const y = (Math.random() - 0.5) * 8;
    const z = (Math.random() - 0.5) * 8;
    tempParticles.push(x, y, z);
  }

  const positions = new Float32Array(tempParticles);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#818cf8"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

// 3D Terminal Console Mesh with mouse interaction and texture mapping
function TerminalMesh() {
  const meshRef = useRef();
  
  // Load user profile image as texture
  const texture = useTexture('/assets/saumya-portrait.png');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle rotation & floating
      meshRef.current.rotation.y = Math.sin(time * 0.15) * 0.08;
      meshRef.current.rotation.x = Math.cos(time * 0.1) * 0.05;
      meshRef.current.position.y = Math.sin(time * 0.6) * 0.1;

      // React to mouse movement
      const mouse = state.pointer;
      meshRef.current.rotation.y += mouse.x * 0.2;
      meshRef.current.rotation.x += -mouse.y * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Clean, Large, and Unaltered Floating Photo Card */}
      <mesh>
        <planeGeometry args={[2.8, 3.5]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function DeveloperWorkspace3D() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!detectWebGLContext()) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return null; // Signals parent to render CSS fallback
  }

  return (
    <div className="w-[500px] h-[500px] hidden lg:block relative z-10">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <TerminalMesh />
          </Float>
          <FloatingParticles count={100} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
}
