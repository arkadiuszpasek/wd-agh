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
          element={<AuthorizedApp state={State.University} />}
        />
        <Route
          path="profile"
          element={<AuthorizedApp state={State.Profile} />}
        />
        <Route
          path="contact"
          element={<AuthorizedApp state={State.Contact} />}
        />
        <Route
          path="calendar"
          element={<AuthorizedApp state={State.Calendar} />}
        />
        <Route path="news" element={<AuthorizedApp state={State.News} />} />
        <Route path="/" element={<AuthorizedApp state={State.Pristine} />} />
      </Routes>
    );
  }

  return <UnauthorizedApp />;
}

export default App;
