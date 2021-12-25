import { Box } from "@mui/system";
import React, { useState } from "react";
import { Bar } from "../../organisms/bar/Bar";
import { GradePage } from "../../organisms/GradePage/GradePage";
import { getTGradeSummaries } from "../../utils/sb/generator";

enum State {
  Grades
}
export const AuthorizedApp = () => {
  const [state, setState] = useState<State>(State.Grades);

  const renderContent = () => {
    switch (state) {
      case State.Grades:
        return <GradePage summaries={getTGradeSummaries()}/>;
      default:
        return <></>;
    }
  }
  return <><Bar />{renderContent()}</>;
};
