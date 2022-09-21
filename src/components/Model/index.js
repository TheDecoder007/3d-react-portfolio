import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

import CloudsDark from "../../assets/photos/CloudsGoodDark3flip22.jpg";
import CloudsGood from "../../assets/photos/CloudsGoodDark3flip22.jpg";

export function Earth(props) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [
    CloudsGood,
    CloudsDark,
  ]);

  const earthRef = useRef();
  const cloudsRef = useRef();
//   const texture = useVideoTexture("../../assets/videos/DecoderIntro.mp4")

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 2;
  });

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight color="#f6f3ea" position={[4, 0, 5]} intensity={1.5} />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={earthRef} scale={[2, 2, 2]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          roughness={0.5}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />

      </mesh>
      <mesh ref={cloudsRef} scale={[2, 2, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.7} roughness={0.5} />
        {/* <OrbitControls enableZoom={true} /> */}
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}
