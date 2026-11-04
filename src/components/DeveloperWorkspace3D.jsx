import { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

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
function FloatingParticles({ count = 110 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.12;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#818cf8" size={0.055} sizeAttenuation transparent opacity={0.65} />
    </points>
  );
}

// 3D Orbiting Gyro Rings + Floating Geometric Crystals (scroll + mouse reactive)
function OrbitalTechRig({ scrollRef }) {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const gem1Ref = useRef();
  const gem2Ref = useRef();
  const gem3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const s = scrollRef.current || 0;
    const mx = state.pointer.x;
    const my = state.pointer.y;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.22 + s * 2.5;
      ring1Ref.current.rotation.x = 1.15 + my * 0.25;
      ring1Ref.current.rotation.y = mx * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.18 - s * 2.0;
      ring2Ref.current.rotation.x = -0.95 + my * 0.2;
      ring2Ref.current.rotation.y = 0.4 - mx * 0.2;
    }
    if (gem1Ref.current) {
      gem1Ref.current.rotation.x = t * 0.7 + s * 3;
      gem1Ref.current.rotation.y = t * 0.5;
      gem1Ref.current.position.y = 1.65 + Math.sin(t * 1.4) * 0.18;
    }
    if (gem2Ref.current) {
      gem2Ref.current.rotation.x = -t * 0.6;
      gem2Ref.current.rotation.z = t * 0.8 + s * 3;
      gem2Ref.current.position.y = -1.55 + Math.cos(t * 1.2) * 0.18;
    }
    if (gem3Ref.current) {
      gem3Ref.current.rotation.y = t * 0.9;
      gem3Ref.current.rotation.x = t * 0.4;
      gem3Ref.current.position.y = 0.25 + Math.sin(t * 1.6 + 1) * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Indigo Gyro Ring */}
      <mesh ref={ring1Ref} position={[0, 0, -0.35]}>
        <torusGeometry args={[2.25, 0.014, 16, 120]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={0.65}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Violet Gyro Ring */}
      <mesh ref={ring2Ref} position={[0, 0, -0.25]}>
        <torusGeometry args={[1.95, 0.011, 16, 100]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* Top-Right Floating 3D Icosahedron Crystal */}
      <mesh ref={gem1Ref} position={[1.85, 1.65, 0.55]}>
        <icosahedronGeometry args={[0.26, 0]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.35}
          metalness={0.85}
          roughness={0.15}
          wireframe
        />
      </mesh>

      {/* Bottom-Left Floating 3D Octahedron Crystal */}
      <mesh ref={gem2Ref} position={[-1.85, -1.55, 0.5]}>
        <octahedronGeometry args={[0.24, 0]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Far-Left Floating 3D Torus Knot Mini Sculpture */}
      <mesh ref={gem3Ref} position={[-1.95, 0.25, -0.2]}>
        <torusKnotGeometry args={[0.16, 0.045, 64, 12]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.35}
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// 3D Spatial Portrait Card with Bezel Frame + Scroll & Pointer Tilt
function PortraitCard3D({ scrollRef }) {
  const groupRef = useRef();
  const texture = useTexture('/assets/saumya-portrait.png');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const s = scrollRef.current || 0;
    if (groupRef.current) {
      const targetRotY =
        Math.sin(time * 0.4) * 0.08 + state.pointer.x * 0.28 + s * 0.55;
      const targetRotX =
        Math.cos(time * 0.3) * 0.05 - state.pointer.y * 0.22 - s * 0.25;

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.09;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Metallic Glass Backplate Bezel */}
      <RoundedBox args={[2.96, 3.66, 0.12]} radius={0.12} smoothness={4} position={[0, 0, -0.07]}>
        <meshStandardMaterial
          color="#1e1b4b"
          emissive="#312e81"
          emissiveIntensity={0.25}
          metalness={0.85}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Main High-Res Portrait Plane */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.76, 3.46]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function DeveloperWorkspace3D() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!detectWebGLContext()) {
      setWebGLSupported(false);
      return;
    }
    const onScroll = () => {
      scrollRef.current = Math.min(1, window.scrollY / 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!webGLSupported) {
    return null;
  }

  return (
    <div className="w-[520px] h-[520px] hidden lg:block relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.9], fov: 44 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[8, 8, 8]} intensity={1.8} color="#818cf8" />
        <pointLight position={[-8, -6, 6]} intensity={1.1} color="#c084fc" />
        <directionalLight position={[0, 5, 5]} intensity={1.1} color="#ffffff" />

        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.18} floatIntensity={0.28}>
            <PortraitCard3D scrollRef={scrollRef} />
          </Float>
          <OrbitalTechRig scrollRef={scrollRef} />
          <FloatingParticles count={110} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.75}
          minPolarAngle={Math.PI / 2.35}
        />
      </Canvas>
    </div>
  );
}
