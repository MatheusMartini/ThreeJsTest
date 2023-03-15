import dynamic from 'next/dynamic'
import css from '../styles/Home.module.css'
import {Canvas} from '@react-three/fiber'

import Floor from '@/components/Floor'
import Box from '@/components/Box'
import Controls from '@/components/OrbitControls'
import Draggable from '@/components/Draggable'
import Light from '@/components/Light'
import ModelViewer from '@/components/ModelViewer'

const Barrel = dynamic(() => import('../components/ModelViewer'), { ssr: false })

const Barrels = () => {
  return (
    <Barrel
      modelPath={`../modelsGlb/construction_barrel_-_3d_scan_quixel_megascans.glb`}
    />
  )
}

export default function Home(){
  return (
    <div className={css.scene}>
      <Canvas shadows className={css.canvas} camera={{
        position: [-6, 7, 7],
      }}>

        <ambientLight color={'white'} intensity={1}/>
        <Light position={[0, 3, 0]}/>

        <Draggable>
          <Box/>
          <Floor position={[0, -1, 0]}/>
        </Draggable>
        <Controls />
        {/* <Barrels/> */}
        {/* <ModelViewer scale='40' modelPath={'../modelsGlb/construction_barrel_-_3d_scan_quixel_megascans.glb'}/> */}
      </Canvas>
    </div>
  )
}
