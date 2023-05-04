import React from "react";
import { Border } from "../components";

import "./SummaryPage.css";

interface WinePageProps {
  summaryContent: string;
}

export const WinePage = ({ summaryContent }: WinePageProps) => {
  return (
    <Border><p className="summary">{summaryContent}</p></Border>
  );
};
