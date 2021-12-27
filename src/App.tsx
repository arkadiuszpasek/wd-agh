import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useUser } from "./models/user";
import { AuthorizedApp, State } from "./pages/AuthorizedApp/AuthorizedApp";
import { UnauthorizedApp } from "./pages/UnauthorizedApp/UnauthorizedApp";

function App() {
  const { user } = useUser();

  if (user) {
    return (
      <Routes>
        <Route
          path="university"
          element={<AuthorizedApp state={State.Grades} />}
        />
        ;
        <Route path="/" element={<AuthorizedApp state={State.Pristine} />} />
      </Routes>
    );
  }

  return <UnauthorizedApp />;
}

export default App;
