import css from '../styles/Home.module.css'
import {Canvas} from '@react-three/fiber'

import Floor from '@/components/Floor'
import Box from '@/components/Box'
import Controls from '@/components/OrbitControls'
import Draggable from '@/components/Draggable'
import Light from '@/components/Light'

export default function Home(){
  return (
    <div className={css.scene}>
      <Canvas shadows className={css.canvas} camera={{
        position: [-6, 7, 7],
      }}>

        <ambientLight color={'white'} intensity={0.4}/>
        <Light position={[0, 3, 0]}/>

        <Draggable>
          <Box/>
          <Floor position={[0, -1, 0]}/>
        </Draggable>
        
        <Controls />

      </Canvas>
    </div>
  )
}
