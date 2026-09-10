import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleWave = () => {
  const pointsRef = useRef();

  // Create a grid of points
  const count = 100;
  const sep = 1.5;

  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const phases = new Float32Array(count * count);

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i * 3] = x;
        positions[i * 3 + 1] = 0; // y
        positions[i * 3 + 2] = z;

        phases[i] = Math.random() * Math.PI * 2;
        i++;
      }
    }
    return [positions, phases];
  }, [count, sep]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);

        // Complex wave function
        const y = Math.sin(x * 0.2 + time * 0.5) * 2 + Math.cos(z * 0.3 + time * 0.3) * 2;

        positions[i * 3 + 1] = y;
        i++;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#6a00ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const CanvasBackground = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 15, 30], fov: 60 }}>
        <fog attach="fog" args={['#050505', 20, 60]} />
        <ParticleWave />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
