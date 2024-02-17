
import { SceneMain } from './Scenes'
function RunMain() {
    return (
        <>
            <mesh position={[0, 0, 2]} >
                <boxGeometry args={[1, 1,1]} />
                <meshBasicMaterial color="red"></meshBasicMaterial>
            </mesh>
            <SceneMain />
        </>
    );
}
export default RunMain
