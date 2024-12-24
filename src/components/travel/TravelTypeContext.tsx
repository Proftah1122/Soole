import React, { createContext, useContext } from 'react';

type TravelType = 'intrastate' | 'interstate';

interface TravelContextType {
  travelType: TravelType;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ type: TravelType; children: React.ReactNode }> = ({ 
  type,
  children 
}) => {
  return (
    <TravelContext.Provider value={{ travelType: type }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelType = () => {
  const context = useContext(TravelContext);
  if (context === undefined) {
    throw new Error('useTravelType must be used within a TravelProvider');
  }
  return context;
};