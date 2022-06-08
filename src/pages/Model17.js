import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("Models/P17.glb");
  return <primitive object={scene} />;
}

export default function Model17() {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50, zoom: 50 }}>
      <ambientLight intensity={6} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
