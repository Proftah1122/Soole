import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { LatLngBounds, LatLng } from 'leaflet';
import { markerIcons } from '../../../utils/mapIcons';
import 'leaflet/dist/leaflet.css';

interface RoutePreviewProps {
  route: {
    pickup: { lat: number; lng: number };
    dropoff: { lat: number; lng: number };
    milestones: Array<{ name: string; lat: number; lng: number }>;
  };
}

export const RoutePreview = ({ route }: RoutePreviewProps) => {
  const points = [
    [route.pickup.lat, route.pickup.lng],
    ...route.milestones.map(m => [m.lat, m.lng]),
    [route.dropoff.lat, route.dropoff.lng]
  ];

  const bounds = new LatLngBounds(
    points.map(p => new LatLng(p[0], p[1]))
  );

  return (
    <MapContainer
      bounds={bounds}
      className="w-full h-full"
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      <Polyline
        positions={points}
        color="#8b5cf6"
        weight={3}
      />

      <Marker
        position={[route.pickup.lat, route.pickup.lng]}
        icon={markerIcons.pickup}
      >
        <Popup>Pickup location</Popup>
      </Marker>

      {route.milestones.map((milestone, index) => (
        <Marker
          key={index}
          position={[milestone.lat, milestone.lng]}
          icon={markerIcons.milestone}
        >
          <Popup>{milestone.name}</Popup>
        </Marker>
      ))}

      <Marker
        position={[route.dropoff.lat, route.dropoff.lng]}
        icon={markerIcons.dropoff}
      >
        <Popup>Drop-off location</Popup>
      </Marker>
    </MapContainer>
  );
};