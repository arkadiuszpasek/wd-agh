import React from "react";
import { useLoggedUser } from "../../../models/user";
import { ProfilePageTemplate } from "./ProfilePageTemplate";

export const ProfilePage = () => {
  const user = useLoggedUser();
  return <ProfilePageTemplate profile={user} />;
};
