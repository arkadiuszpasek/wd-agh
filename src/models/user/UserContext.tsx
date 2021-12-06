import React, { useState } from "react";
import { User } from "./User";

export interface Value {
  user: User | undefined;
  setUser: (user: User) => void;
}
export const UserContext = React.createContext<Value | undefined>(undefined);

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};