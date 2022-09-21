import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import TheFace from "../../assets/photos/MurpheusFace.jpg";
import CloudsGood from "../../assets/photos/CloudsGood.jpg";

export function Earth2(props) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [
    CloudsGood,
    TheFace,
  ]);

  const earthRef = useRef();
  const cloudsRef = useRef();

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
      <mesh ref={cloudsRef} scale={[2, 2, 2]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={colorMap}
          opacity={0.4}
          roughness={0.5}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />

      </mesh>
      <mesh ref={earthRef} scale={[2, 2, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={cloudsMap} metalness={0.7} roughness={0.5} />
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