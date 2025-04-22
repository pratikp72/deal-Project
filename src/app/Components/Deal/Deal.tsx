"use client";

import { useSearchParams } from "next/navigation";
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataString = searchParams.get("data");
    if (dataString) {
      try {
        // First try to parse without decoding (in case it was already decoded)
        let parsedData;
        try {
          parsedData = JSON.parse(dataString);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (parseError) {
          // If direct parsing fails, try decoding first
          try {
            const decodedString = decodeURIComponent(dataString);
            parsedData = JSON.parse(decodedString);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (decodeError) {
            throw new Error("Failed to decode or parse the data parameter");
          }
        }
        
        // Validate the data structure
        if (Array.isArray(parsedData)) {
          setSummaryData(parsedData);
          setError(null);
        } else {
          throw new Error("Expected an array of summary data");
        }
      } catch (err) {
        console.error("Invalid summary data in query:", err);
        setError("Failed to load summary data. Please try again.");
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

        {/* Show error message if there was a problem */}
        {error && (
          <div className="mb-6 p-4 border border-red-300 rounded bg-red-50 text-red-700">
            {error}
          </div>
        )}

        {/* Show summary data when available */}
        {/* {summaryData.length > 0 && (
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
        )} */}

        <ImageComponent summaryData={summaryData} />
        <ImageSummary summaryData={summaryData} />
        <Number summaryData={summaryData} />
        <SupplyPipeline summaryData={summaryData} />
      </div>
    </div>
  );
}