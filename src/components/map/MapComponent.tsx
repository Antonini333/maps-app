import { useEffect, useState } from 'react';
import { generateMap } from './mapFunctions/index';
import Map from "ol/Map";
import "./styles.scss"

export const MapComponent: any = () => {
    const [center, setCenter] = useState<any>([-20880.58, 4785005.21]);
    const [map, setMap] = useState<Map | null>(null);
    const mapElementId = "map";

    useEffect(() => {
        const newMap = generateMap(mapElementId, center, 10)
        setMap(newMap)
    }, [])

    return (
      <div className="l-map">
            <div className="map-container" id={mapElementId} />
            </div>
      
    )
}

export default MapComponent