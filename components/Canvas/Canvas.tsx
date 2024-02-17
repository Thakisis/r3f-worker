import RunMain from './RunMain';
import { Canvas as CanvasR3f } from '@react-three/fiber'




function Canvas() {
    return (
        <CanvasR3f >
            <RunMain></RunMain>
        </CanvasR3f>

    );
}

export default Canvas;