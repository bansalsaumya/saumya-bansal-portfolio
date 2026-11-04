import { useRef, useState } from 'react';

export default function Tilt3DCard({ children, className = '', maxTilt = 7 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    glareX: 50,
    glareY: 50,
    hovered: false,
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = x / rect.width;
    const pctY = y / rect.height;

    const rotateY = (pctX - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - pctY) * maxTilt * 2;

    setStyle({
      transform: `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      glareX: Math.round(pctX * 100),
      glareY: Math.round(pctY * 100),
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      glareX: 50,
      glareY: 50,
      hovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: style.transform,
        transition: style.hovered
          ? 'transform 0.08s ease-out'
          : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {/* Dynamic 3D Cursor Spotlight Glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-20"
        style={{
          opacity: style.hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${style.glareX}% ${style.glareY}%, rgba(129, 140, 248, 0.14), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
