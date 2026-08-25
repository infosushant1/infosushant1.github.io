import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Network() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const a = (i / 22) * Math.PI * 2;
        const r = 2.25 + (i % 3) * 0.18;
        return [Math.cos(a) * r, Math.sin(a * 2) * 0.55, Math.sin(a) * r] as [number, number, number];
      }),
    []
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
      group.current.rotation.x = Math.sin(performance.now() * 0.00025) * 0.04;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((p, i) => (
        <React.Fragment key={i}>
          <mesh position={p}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#3bb7a4" />
          </mesh>
          <Line
            points={[p, nodes[(i + 1) % nodes.length]]}
            color="#74cdbd"
            transparent
            opacity={0.13}
            lineWidth={0.5}
          />
        </React.Fragment>
      ))}
    </group>
  );
}

export default function NeuralBackdrop() {
  return (
    <div className="neural-backdrop" aria-hidden="true">
      <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 6], fov: 48 }}>
        <ambientLight intensity={0.4} />
        <Float speed={0.45} floatIntensity={0.15} rotationIntensity={0.05}>
          <Network />
        </Float>
        <Sparkles count={35} scale={7} size={0.7} speed={0.12} color="#63b9ab" />
      </Canvas>
    </div>
  );
}
