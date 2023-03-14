function Light(props){

    return(
        <mesh {...props}>
          <pointLight castShadow/>
        </mesh>
    )

}

export default Light;