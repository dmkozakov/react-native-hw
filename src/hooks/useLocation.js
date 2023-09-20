import { createContext, useContext, useState } from "react";

const defaultLocation = {
  location: null,
  setLocation: () => {},
};

export const LocationContext = createContext(defaultLocation);

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);

  return (
    <LocationContext.Provider
      value={{ title, setTitle, description, setDescription, location, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
