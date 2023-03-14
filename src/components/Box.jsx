function Box(props){

    return(
        <mesh {...props} recieveShadow={true} castShadow>
            <boxBufferGeometry/>
            <meshPhysicalMaterial color={'blue'}/>
        </mesh>
    )

}

export default Box;