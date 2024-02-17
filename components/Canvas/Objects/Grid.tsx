import { Grid } from '@react-three/drei'
export function GridFloor() {

    const { ...gridConfig } = {

        cellSize: 0.5,
        cellThickness: .6,
        cellColor: '#ffffff',
        sectionColor: '#909090',

        sectionSize: 3,
        sectionThickness: .7,



        followCamera: false,

    }

    return (
        <Grid position={[0, 0.01, 0]} {...gridConfig} infiniteGrid />
    )
}
