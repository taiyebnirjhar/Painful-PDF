"use client";

import { createContext } from "react";
import useSampleData from "../hooks/useSampleData.hook";
import AppContextProps from "../types/appContextProps.types";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function AppContextProvider({ children }) {
  const sampleData = useSampleData();

  return (
    <AppContext.Provider value={{ ...sampleData }}>
      {children}
    </AppContext.Provider>
  );
}
