"use client"; // Add this if you're using Next.js App Router

import { useSearchParams } from "next/navigation"; // or useRouter in Pages Router
import { useEffect, useState } from "react";

import ImageComponent from "./ImageComponent";
import ImageSummary from "./ImageSummary";
import Navbar from "../Navbar/Navbar";
import Number from "./Number";
import Header from "../common-components/Header";
import { SupplyPipeline } from "./SupplyPipeline";

export default function Deal() {
  const searchParams = useSearchParams();
  interface Summary {
    fileName: string;
    summary: {
      summary: string;
      keyPoints: string[];
      sentiment: string;
    };
  }

  const [summaryData, setSummaryData] = useState<Summary[]>([]);

  useEffect(() => {
    const dataString = searchParams.get("data");
    if (dataString) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(dataString));
        setSummaryData(parsedData);
      } catch (err) {
        console.error("Invalid summary data in query:", err);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        navLinks={["Deal Overview", "Workshop", "Pipeline", "Settings"]}
        pageType="deal"
      />
      <div className="px-8 py-8">
        <Header title="Deal Overview" />

        {/* Show summary data here */}
        {summaryData.length > 0 && (
          <div className="mb-6">
            {summaryData.map((summary, idx) => (
              <div key={idx} className="mb-4 p-4 border rounded bg-gray-100">
                <h2 className="text-lg font-bold">{summary.fileName}</h2>
                <p className="text-sm mt-1">{summary.summary.summary}</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  {summary.summary.keyPoints.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="text-sm mt-2">
                  <strong>Sentiment:</strong> {summary.summary.sentiment}
                </p>
              </div>
            ))}
          </div>
        )}

        <ImageComponent summaryData={summaryData} />
        <ImageSummary summaryData={summaryData} />
        <Number summaryData={summaryData} />
        <SupplyPipeline summaryData={summaryData} />
      </div>
    </div>
  );
}
