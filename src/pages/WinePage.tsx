import React from "react";
import { Border } from "../components";

import styles from "./SummaryPage.module.css";

interface WinePageProps {
  summaryContent: string;
}

export const WinePage = ({ summaryContent }: WinePageProps) => {
  return (
    <Border>
      <p className={styles.summary}>{summaryContent}</p>
    </Border>
  );
};
