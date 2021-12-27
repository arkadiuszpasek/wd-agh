import React from "react";
import { Bar } from "../../organisms/bar/Bar";
import { GradePage } from "../../organisms/GradePage/GradePage";
import { getTGradeSummaries } from "../../utils/sb/generator";
import { HomePage } from "./HomePage/HomePage";

export enum State {
  Grades,
  Pristine,
}
interface Props {
  state: State;
}
export const AuthorizedApp = ({ state }: Props) => {
  const renderContent = () => {
    switch (state) {
      case State.Grades:
        return <GradePage summaries={getTGradeSummaries()} />;
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
