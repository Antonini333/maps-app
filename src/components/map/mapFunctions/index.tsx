
import Map from "ol/Map";
import { defaults } from "ol/control";
import { View } from "ol";
import OSM from "ol/source/OSM";
import * as Interaction from "ol/interaction";
import BaseLayer from "ol/layer/Base";
import TileLayer from "ol/layer/Tile";





export const generateMap: any = (
    elementId: string,
    center: any[],
    zoom: number
) => {
    

    const map = new Map({
        view: new View({
            projection: "EPSG:3857",
            center: center,
            zoom: zoom,
            maxZoom: 17,
        }),
        layers: [new TileLayer({
            source: new OSM(),
          })],
        controls: defaults({
            rotate: false,
            attribution: false,
            zoom: false,
        }),
        target: elementId,
    });

    return map;
};





