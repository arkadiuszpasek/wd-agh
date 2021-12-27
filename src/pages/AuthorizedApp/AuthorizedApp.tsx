import React from "react";
import { Bar } from "../../organisms/bar/Bar";
import { GradePage } from "../../organisms/GradePage/GradePage";
import { getTGradeSummaries } from "../../utils/sb/generator";
import { CalendarPage } from "./CalendarPage/CalendarPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { HomePage } from "./HomePage/HomePage";
import { NewsPage } from "./NewsPage/NewsPage";

export enum State {
  University,
  News,
  Contact,
  Profile,
  Calendar,
  Pristine,
}
interface Props {
  state: State;
}
export const AuthorizedApp = ({ state }: Props) => {
  const renderContent = () => {
    switch (state) {
      case State.University:
        return <GradePage summaries={getTGradeSummaries()} />;
      case State.Contact:
        return <ContactPage />;
      case State.News:
        return <NewsPage />;
      case State.Calendar:
        return <CalendarPage />;
      case State.Pristine:
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <Bar />
      {renderContent()}
    </>
  );
};
