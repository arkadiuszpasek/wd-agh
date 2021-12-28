import React from "react";
import { useUser } from "../../../models/user";
import { TheUser } from "../../../models/user/User";
import { LoginPageTemplate } from "./LoginPageTemplate";

export const LoginPage = () => {
  const { setUser } = useUser();
  return <LoginPageTemplate onLogIn={(id) => setUser(TheUser)} />;
};
