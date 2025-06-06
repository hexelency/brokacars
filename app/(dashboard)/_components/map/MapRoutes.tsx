import React from "react";
import type { GeoJSON } from "geojson";
import { Source, Layer } from "react-map-gl/mapbox";

interface MapRoutesProps {
  // “LineString” coordinates must be an array of [lng, lat] pairs:
  coordinates: [number, number][]; 
}

const lineLayer: any = {
  id: "route-line", 
  type: "line",
  layout:{
    'line-join':'round',
    'line-cap':'square'
  },
  paint: {
    "line-color": "#007cbf",
    "line-width": 4
  }
};

const MapRoutes: React.FC<MapRoutesProps> = ({ coordinates }) => {
  // Construct a valid GeoJSON Feature<LineString> with a required “properties” key
  const routeGeoJSON: GeoJSON.Feature<GeoJSON.LineString> = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates
    },
    properties: {} // ← must have at least an empty object
  };

  return (
    <Source id="route-source" type="geojson" data={routeGeoJSON}>
      <Layer {...lineLayer} />
    </Source>
  );
};

export default MapRoutes;
