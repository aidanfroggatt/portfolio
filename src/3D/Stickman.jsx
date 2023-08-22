import React from "react";
import ModelViewer from "./ModelViewer";
import stickmanModel from "../assets/3D/stickman_model.glb"
import '../styles/3D/Stickman.css'
const Stickman = () => {
    return (
        <div className="stickman-canvas-container">
            <ModelViewer modelPath={stickmanModel} scale={1} position={[0,0,0]}/>
        </div>
    );
};

export default Stickman;