import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = React.memo(() => {
  const ref = useRef();
  const [positions] = React.useState(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 500 : 1500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f3ff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
});

const GridPlane = React.memo(({ isProductivity }) => {
  const gridRef = useRef();

  useFrame((state) => {
    if (isProductivity) return;
    const { x, y } = state.mouse;
    // Subtle tilt that doesn't push the grid away
    gridRef.current.rotation.x = -Math.PI / 3 + (y * 0.05);
    gridRef.current.rotation.y = x * 0.03;
  });

  return (
    <group ref={gridRef} position={[0, -2.5, 0]}>
      <Grid
        infiniteGrid
        fadeDistance={150}
        fadeStrength={2}
        cellSize={1.5}
        sectionSize={2.5}
        sectionColor="#00f3ff"
        sectionThickness={1.8}
        cellColor="#0066ff"
        cellThickness={1}
      />
    </group>
  );
});

const CyberGrid = React.memo(({ isProductivity }) => {
  if (isProductivity) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 1
    }}>
      <Canvas camera={{ position: [0, 4, 15], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 10, 0]} color="#00f3ff" intensity={5} />
        
        <FloatingParticles />
        <GridPlane isProductivity={isProductivity} />
      </Canvas>
    </div>
  );
});

export default CyberGrid;
