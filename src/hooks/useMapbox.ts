import { useState, useEffect } from 'react';

interface MapboxConfig {
  isLoaded: boolean;
  error: string | null;
  token: string | null;
}

export const useMapbox = () => {
  const [config, setConfig] = useState<MapboxConfig>({
    isLoaded: false,
    error: null,
    token: import.meta.env.VITE_MAPBOX_TOKEN || null
  });

  useEffect(() => {
    if (!config.token) {
      setConfig(prev => ({
        ...prev,
        error: 'Mapbox token is not configured. Please add VITE_MAPBOX_TOKEN to your environment variables.'
      }));
      return;
    }

    setConfig(prev => ({ ...prev, isLoaded: true }));
  }, []);

  return config;
};