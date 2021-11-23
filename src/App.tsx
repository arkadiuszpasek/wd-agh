import React from "react";
import "./App.css";
import { useUser } from "./models/user";
import { AuthorizedApp } from "./pages/AuthorizedApp/AuthorizedApp";
import { UnauthorizedApp } from "./pages/UnauthorizedApp/UnauthorizedApp";

function App() {
  const { user } = useUser();

  if (user) {
    return <AuthorizedApp />;
  }

  return <UnauthorizedApp />;
}

export default App;
