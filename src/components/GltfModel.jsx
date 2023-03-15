import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useRef, useState } from "react";

const GltfModel = ({modelPath, scale = 40, position= [ 0, 0, 0] }) => {
    
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);

    useFrame((state, delta)=>(
        ref.current.rotation.y += 0.003
    ))
    
    return (
        <>
            <primitive
                ref = {ref}
                position={position} 
                object={gltf.scene} 
                scale={hovered ? scale*1.2 : scale} 
                onPointerOver={(event)=>hover(true)}
                onPointerOut={(event)=>hover(false)}
            />
        </>
    );
};

export default GltfModel