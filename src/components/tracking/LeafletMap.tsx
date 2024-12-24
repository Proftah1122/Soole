import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: null,
  iconUrl: null,
  shadowUrl: null,
});

interface LeafletMapProps {
  driverLocation: { latitude: number; longitude: number; };
  pickup: { latitude: number; longitude: number; };
  dropoff: { latitude: number; longitude: number; };
}

export const LeafletMap: React.FC<LeafletMapProps> = ({
  driverLocation,
  pickup,
  dropoff
}) => {
  const createCustomIcon = (color: string) => new DivIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });

  const driverIcon = new DivIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: #9333ea;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: pulse 2s infinite;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

  useEffect(() => {
    // Add pulse animation style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MapContainer
      center={[driverLocation.latitude, driverLocation.longitude]}
      zoom={14}
      className="w-full h-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Driver Marker */}
      <Marker 
        position={[driverLocation.latitude, driverLocation.longitude]}
        icon={driverIcon}
      >
        <Popup>Driver's current location</Popup>
      </Marker>

      {/* Pickup Marker */}
      <Marker 
        position={[pickup.latitude, pickup.longitude]}
        icon={createCustomIcon('#22c55e')}
      >
        <Popup>Pickup location</Popup>
      </Marker>

      {/* Dropoff Marker */}
      <Marker 
        position={[dropoff.latitude, dropoff.longitude]}
        icon={createCustomIcon('#ef4444')}
      >
        <Popup>Drop-off location</Popup>
      </Marker>
    </MapContainer>
  );
};