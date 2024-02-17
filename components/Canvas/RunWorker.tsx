import { SceneMain } from "./Scenes"
export function RunWorker() {
    return (
        <>
            <mesh position={[0, 0, 2]} >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="green"></meshBasicMaterial>
            </mesh>
            <SceneMain />
        </>
    );
}

