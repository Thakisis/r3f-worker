import { MC } from "@/models/MC"
import { CameraControls, Environment, Plane } from "@react-three/drei"
import { GridFloor } from "@/objects/Grid"

export function SceneMain(props) {
    return (
        <>
            <MC scale={3} />
            <CameraControls enabled={true}></CameraControls>
            <Environment preset="city" background={true} blur={10}></Environment>
            <GridFloor></GridFloor>
            <Plane rotation-x={-Math.PI / 2} args={[100, 100]}>
                <meshPhysicalMaterial color="red"></meshPhysicalMaterial>
            </Plane>
        </>
    )
}

