import React, { useState } from "react";

export const AppContext =
  React.createContext<{
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
  } | null>(null);

interface Props {}

export const AppContextProvider: React.FC<Props> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppContext.Provider {...props} value={{ isDrawerOpen, toggleDrawer }} />
  );
};

