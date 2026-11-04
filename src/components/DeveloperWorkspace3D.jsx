import { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, RoundedBox } from '@react-three/drei';

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

// Subtle background starfield behind the portrait
function FloatingParticles({ count = 65 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      // Keep particles strictly behind the portrait plane (z < -0.5)
      arr[i * 3 + 2] = -0.6 - Math.random() * 3.5;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#818cf8" size={0.04} sizeAttenuation transparent opacity={0.45} />
    </points>
  );
}

// Clean 3D Spatial Portrait Card with Smooth Mouse & Scroll Parallax Tilt (No ugly rings over the face!)
function PortraitCard3D({ scrollRef }) {
  const groupRef = useRef();
  const texture = useTexture('/assets/saumya-portrait.png');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const s = scrollRef.current || 0;
    if (groupRef.current) {
      const targetRotY =
        Math.sin(time * 0.4) * 0.05 + state.pointer.x * 0.22 + s * 0.25;
      const targetRotX =
        Math.cos(time * 0.3) * 0.03 - state.pointer.y * 0.16 - s * 0.15;

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Soft Indigo Halo Rim Frame strictly behind the portrait */}
      <RoundedBox args={[3.04, 3.74, 0.08]} radius={0.14} smoothness={4} position={[0, 0, -0.1]}>
        <meshStandardMaterial
          color="#312e81"
          emissive="#4f46e5"
          emissiveIntensity={0.35}
          metalness={0.7}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Sleek Dark Slate Inner Bezel */}
      <RoundedBox args={[2.94, 3.64, 0.08]} radius={0.11} smoothness={4} position={[0, 0, -0.05]}>
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.85}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Main High-Res Unobstructed Portrait Plane */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.8, 3.5]} />
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
    <div className="w-[500px] h-[500px] hidden lg:block relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.7], fov: 44 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[6, 6, 6]} intensity={1.4} color="#818cf8" />
        <pointLight position={[-6, -6, 6]} intensity={0.9} color="#c084fc" />
        <directionalLight position={[0, 4, 5]} intensity={1.0} color="#ffffff" />

        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.2}>
            <PortraitCard3D scrollRef={scrollRef} />
          </Float>
          <FloatingParticles count={65} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.25}
        />
      </Canvas>
    </div>
  );
}
