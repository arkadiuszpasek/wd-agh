import React from "react";
import { Bar } from "../../organisms/bar/Bar";
import { CalendarPage } from "./CalendarPage/CalendarPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { HomePage } from "./HomePage/HomePage";
import { NewsPage } from "./NewsPage/NewsPage";
import { ProfilePage } from "./ProfilePage/ProfilePage";
import { UniversityGradeDetailsPage } from "./UniversityGradeDetailsPage/UniversityGradeDetailsPage";
import { UniversityGradesPage } from "./UniversityGradesPage/UniversityGradesPage";
import { UniversityMenuPage } from "./UniversityMenuPage/UnivesityMenuPage";

export enum State {
  University,
  Grades,
  GradeDetails,
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
        return <UniversityMenuPage />;
      case State.Grades:
        return <UniversityGradesPage />;
      case State.GradeDetails:
        return <UniversityGradeDetailsPage />;
      case State.Contact:
        return <ContactPage />;
      case State.News:
        return <NewsPage />;
      case State.Calendar:
        return <CalendarPage />;
      case State.Profile:
        return <ProfilePage />;
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
