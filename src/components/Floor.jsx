import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const name = (type) => `floorMaterial/PavingStones035_1K_${type}.jpg`;

function Floor(props){

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
        <mesh {...props} recieveShadow>
            <boxBufferGeometry args={[10, 1, 10]}/>
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

export default Floor;