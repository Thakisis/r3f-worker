"use client"
import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('@/components/Canvas'), { ssr: false })

export function CanvasWrapper() {
    return (
        <div className="flex absolute inset-0 z-9">
            <Canvas></Canvas>
        </div>
    )

}

