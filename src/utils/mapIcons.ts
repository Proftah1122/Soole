import L from 'leaflet';

// Create custom div icons for different markers
export const createCustomIcon = (color: string) => L.divIcon({
  className: 'custom-map-marker',
  html: `
    <div 
      style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "
    ></div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

export const markerIcons = {
  pickup: createCustomIcon('#22c55e'), // green
  dropoff: createCustomIcon('#ef4444'), // red
  milestone: createCustomIcon('#8b5cf6'), // purple
};