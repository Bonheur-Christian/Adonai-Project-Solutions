import React, { useState } from "react";

export const ServiceContext = React.createContext({
  services: [],
  setServices: () => {},
});

export const ServiceContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  

  return (
    <ServiceContext.Provider value={{ services, setServices }}>
      {children}
    </ServiceContext.Provider>
  );
};
