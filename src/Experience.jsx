import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import { Physics, Debug } from '@react-three/rapier'
import Player from "./Player.jsx";
import useGame from './stores/useGame'
import Effects from "./Effects.jsx";

export default function Experience()
{
    const blocksCount = useGame(state => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)

    return <>

        <color args={ [ '#252731' ] } attach="background" /> {/*Sky colours*/}

        {/*<OrbitControls makeDefault />*/}

        <Physics>
            {/*<Debug />*/}
            <Lights />
            <Level count={ blocksCount } seed={ blocksSeed } />
            <Player />
        </Physics>

        <Effects />
    </>
}