import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { Car, MapPin } from 'lucide-react';
import { useMapbox } from '../../hooks/useMapbox';
import { TripProgress } from './TripProgress';

interface MapViewProps {
  driverLocation: { latitude: number; longitude: number; };
  pickup: { latitude: number; longitude: number; };
  dropoff: { latitude: number; longitude: number; };
  progress: number;
  remainingTime: number;
}

export const MapView: React.FC<MapViewProps> = ({
  driverLocation,
  pickup,
  dropoff,
  progress,
  remainingTime
}) => {
  const { isLoaded, error, token } = useMapbox();

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-800">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-800">
        <p className="text-gray-400">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <Map
        initialViewState={{
          longitude: driverLocation.longitude,
          latitude: driverLocation.latitude,
          zoom: 14
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={token!}
      >
        <Marker
          longitude={driverLocation.longitude}
          latitude={driverLocation.latitude}
        >
          <div className="p-2 rounded-full bg-purple-500 animate-pulse">
            <Car className="text-white" size={20} />
          </div>
        </Marker>

        <Marker
          longitude={pickup.longitude}
          latitude={pickup.latitude}
        >
          <div className="p-2 rounded-full bg-green-500">
            <MapPin className="text-white" size={20} />
          </div>
        </Marker>

        <Marker
          longitude={dropoff.longitude}
          latitude={dropoff.latitude}
        >
          <div className="p-2 rounded-full bg-red-500">
            <MapPin className="text-white" size={20} />
          </div>
        </Marker>
      </Map>

      <div className="absolute bottom-4 left-4 right-4">
        <TripProgress 
          progress={progress} 
          remainingTime={remainingTime}
        />
      </div>
    </div>
  );
};