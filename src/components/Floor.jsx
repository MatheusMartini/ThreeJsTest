function Floor(props){

    return(
        <mesh {...props} recieveShadow>
            <boxBufferGeometry args={[10, 1, 10]}/>
            <meshPhysicalMaterial color={'red'}/>
        </mesh>
    )

}

export default Floor;