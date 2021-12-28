import React from "react";
import { User } from "./User";
import { UserContext } from "./UserContext";

export const useLoggedUser = (): User => {
  const context = React.useContext(UserContext);

  if (!context || !context.user) {
    throw new Error("User is not logged in, cannot use UserContext");
  }

  return context.user;
};
