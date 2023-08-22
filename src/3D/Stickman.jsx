import React from "react";
import ModelViewer from "./ModelViewer";
import stickmanModel from "../assets/3D/stickman_model.glb"
const Stickman = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
    return (
        <ModelViewer modelPath={stickmanModel} scale={1}/>
    );
};

export default Stickman;