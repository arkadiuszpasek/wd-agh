import React, { useState } from "react";
import { User } from "./User";

export interface Value {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}
export const UserContext = React.createContext<Value | undefined>(undefined);

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | undefined>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
