import React from "react";
import DOMPurify from "dompurify";
import { Border } from "../components";

import styles from "./SummaryPage.module.css";

interface SummaryPageProps {
  summaryContent: string;
}

export const SummaryPage = ({ summaryContent }: SummaryPageProps) => {
  // Sanitize the HTML content
  const sanitizedHtmlContent = DOMPurify.sanitize(summaryContent);
  return (
    <Border>
      <p
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
      />
    </Border>
  );
};
