import { useContext } from "react";
import { AppContext } from "../context/app.context";

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return useContext(AppContext);
}
