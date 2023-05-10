import React from "react";
import DOMPurify from "dompurify";
import { Border } from "../components";

import "./SummaryPage.css";

interface SummaryPageProps {
  summaryContent: string;
}

export const SummaryPage = ({ summaryContent }: SummaryPageProps) => {
  // Sanitize the HTML content
  const sanitizedHtmlContent = DOMPurify.sanitize(summaryContent);
  return (
    <Border>
      <p
        className="summary"
        dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
      />
    </Border>
  );
};
