import "./App.css";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, GLTFLoader } from "@react-three/drei";
// import { useLoader } from "react-three-fiber";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import "./index.css";
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

  return (
    <Container fluid className="mainContainer" >
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
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
