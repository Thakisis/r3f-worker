import { lazy } from 'react'
import { Canvas as CanvasOff } from '@react-three/offscreen'



const worker: Worker = new Worker(new URL('@/components/render.tsx', import.meta.url), { type: 'module' })
const RunMain = lazy(() => import('./RunMain'))
function Canvas() {
    return (
        <CanvasOff worker={worker} fallback={<RunMain />} />

    );
}

export default Canvas;