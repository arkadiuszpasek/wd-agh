import React from "react";
import { useUser } from "../../../models/user";
import { LoginPageTemplate } from "./LoginPageTemplate";

export const LoginPage = () => {
  const { setUser } = useUser();
  return (
    <LoginPageTemplate onLogIn={(id) => setUser({ id })}/>
  )
}