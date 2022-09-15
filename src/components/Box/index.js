import React from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../assets/photos/MurpheusFace.jpeg"

export default function Box() {
const colorMap = useLoader(TextureLoader, texture)

    return <mesh>

        <boxBufferGeometry attach="geometry" args={[4,5,4]} />
        <meshStandardMaterial map={colorMap}/>
    </mesh>;
}