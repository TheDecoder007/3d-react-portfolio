import './App.css';
import React, { useState, Suspense} from 'react';
import { Canvas } from "react-three-fiber"
import { OrbitControls, GLTFLoader } from 'drei';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PageFooter from "./components/Footer";
import Box from './components/Box';

function App() {
  const [activeTab, setActiveTab] = useState("Projects");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    if (activeTab === "Projects") return <Projects />;
    if (activeTab === "Contact") return <Contact />;
  };


  const changeActiveTab = (tab) => setActiveTab(tab);

  return (
      <Container fluid className="mainContainer">
    
    <Canvas>

<mesh>
  <Box />
</mesh>

    </Canvas>

      <TopNav activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {currentPage()}
      <PageFooter/>
    </Container>



  );
}

export default App;
