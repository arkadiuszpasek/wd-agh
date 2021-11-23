import React from "react";
import { UserContext, Value } from "./UserContext";

export const useUser = (): Value => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserContextProvider");
  }

  return context;
};
