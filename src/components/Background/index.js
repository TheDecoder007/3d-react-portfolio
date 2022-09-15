import React from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import background from "../../assets/images/CloudsGoodDark.jpeg"

export default function Background() {
    const colorMap = useLoader(TextureLoader, background)

    return 
<Background />


}