import "./App.css";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, GLTFLoader, ScrollControls, Scroll } from "@react-three/drei";
// import { useLoader } from "react-three-fiber";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PageFooter from "./components/Footer";
import Box from "./components/Box";
import Background from "./components/Background";
import { Earth } from "./components/Model";
import { Lander } from "./components/Lander";
import { Earth2 } from "./components/Earth2";

function App() {
  const [activeTab, setActiveTab] = useState("Projects");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    if (activeTab === "Projects") return <Projects />;
    if (activeTab === "Contact") return <Contact />;
  };
  const changeActiveTab = (tab) => setActiveTab(tab);

  //BEGINNING OF THREES CODE
  // const scene = new THREE.Scene();

  // const renderer = new THREE.WebGL1Renderer({
  //   canvas: document.querySelector('#bg'),
  // });
  // renderer.setPixelRatio( window.devicePixelRatio );
  // renderer.setSize( window.innerWidth, window.innerHeight );

  // const spaceTexture = new TextureLoader().load('./assets/photos/CloudsGoodDark.jpg');
  // scene.background = spaceTexture;

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGL1Renderer({
    Canvas
  });

  renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(2);
camera.position.setX(0)
camera.position.setY(1)

  function moveCamera() {

    const t = document.body.getBoundingClientRect().top;
 
  
    camera.position.z = t * -0.012;
    camera.position.x = t * -0.000002;
    camera.position.y = t * -0.006;
  }
  document.body.onscroll = moveCamera

  return (
    <Container fluid className="mainContainer" >
      <Lander />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Canvas>
        <Suspense fallback={null}>
          <Earth2 />
        </Suspense>
      </Canvas>

 
      {/* <TopNav activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {currentPage()}
      <PageFooter/> */}

    </Container>
  );
}

export default App;
