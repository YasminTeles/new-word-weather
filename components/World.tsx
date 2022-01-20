import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGlobe,
} from "react-simple-maps"

export default function World() {
  return (
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 220 }}
    >
      <ZoomableGlobe>
        <circle
          cx={250}
          cy={250}
          r={220}
          fill="transparent"
          stroke="#FFF"
        />

        <Geographies
          disableOptimization
          geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
        >
          {(geographies: any, projection: any) =>
            geographies.map((geography: any, i: number) => (
              <Geography
                key={geography.id + i}
                geography={geography}
                projection={projection}
                style={{
                  default: { fill: "#FFF" }
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGlobe>
    </ComposableMap>
  )
}
