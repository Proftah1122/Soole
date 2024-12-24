import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import { DriverMarker } from './DriverMarker';

interface RouteMapProps {
  driverLocation: { latitude: number; longitude: number; };
  pickup: { latitude: number; longitude: number; };
  dropoff: { latitude: number; longitude: number; };
}

export const RouteMap: React.FC<RouteMapProps> = ({
  driverLocation,
  pickup,
  dropoff
}) => {
  return (
    <Map
      initialViewState={{
        longitude: driverLocation.longitude,
        latitude: driverLocation.latitude,
        zoom: 14
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
      <DriverMarker {...driverLocation} />

      <Marker longitude={pickup.longitude} latitude={pickup.latitude}>
        <div className="p-2 rounded-full bg-green-500">
          <MapPin className="text-white" size={20} />
        </div>
      </Marker>

      <Marker longitude={dropoff.longitude} latitude={dropoff.latitude}>
        <div className="p-2 rounded-full bg-red-500">
          <MapPin className="text-white" size={20} />
        </div>
      </Marker>
    </Map>
  );
};