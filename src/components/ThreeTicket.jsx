import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Billboard } from "@react-three/drei";

function Stage({ progress = 0 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.2) * 0.2; // slow left-right sway
    }
  });

  return (
    <group ref={ref} scale={1.5} position={[0, -2.8, 0]}>

      {/* Stage Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6, 0.5, 3]} />
        <meshStandardMaterial color={"#1f2937"} roughness={0.6} />
      </mesh>

      {/* Left Truss */}
      <mesh position={[-2.8, 2, 1]}>
        <boxGeometry args={[0.2, 4, 0.2]} />
        <meshStandardMaterial color={"#06b6d4"} />
      </mesh>

      {/* Right Truss */}
      <mesh position={[2.8, 2, 1]}>
        <boxGeometry args={[0.2, 4, 0.2]} />
        <meshStandardMaterial color={"#8b5cf6"} />
      </mesh>

      {/* Top Bar */}
      <mesh position={[0, 4, 1]}>
        <boxGeometry args={[6, 0.2, 0.2]} />
        <meshStandardMaterial color={"#ff7ae6"} />
      </mesh>

      {/* Spotlights */}
      <mesh position={[-2, 3.8, 1]}>
        <coneGeometry args={[0.3, 0.6, 32]} />
        <meshStandardMaterial color={"#fff"} emissive={"#ffd700"} emissiveIntensity={1.5} />
      </mesh>

      <mesh position={[2, 3.8, 1]}>
        <coneGeometry args={[0.3, 0.6, 32]} />
        <meshStandardMaterial color={"#fff"} emissive={"#00eaff"} emissiveIntensity={1.5} />
      </mesh>

      {/* Text Banner */}
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          EventSphere
        </Text>
        <Text
          position={[0, 1.7, 0]}
          fontSize={0.35}
          color="#ff7ae6"
          anchorX="center"
          anchorY="middle"
        >
          Upcoming Events
        </Text>
      </Billboard>
    </group>
  );
}

export default function ThreeStage({ progress = 0 }) {
  return (
    <Canvas
      className="stage3d"
      shadows
      camera={{ position: [0, 3, 10], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <Stage progress={progress} />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
