import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const name = (type) => `boxMaterial/WoodFloor041_2K_${type}.jpg`;

function Box(props){

    const [
        colorMap,
        displacementMap,
        normalMap,
        roughnessMap,
        aoMap
    ] = useLoader(TextureLoader, [
        name("Color"),
        name("Displacement"),
        name("NormalGL"),
        name("Roughness"),
        name("AmbientOcclusion")
    ]);

    return(
        <mesh {...props} recieveShadow={true} castShadow>
            <boxBufferGeometry/>
            <meshPhysicalMaterial 
                displacementScale={0}
                map={colorMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap}
            />
        </mesh>
    )

}

export default Box;