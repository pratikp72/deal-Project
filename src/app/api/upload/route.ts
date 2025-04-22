// src/app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Import pdf-parse with a different approach
import pdfParse from "pdf-parse/lib/pdf-parse.js";

// Check the API key is available
const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  console.error("GOOGLE_API_KEY is not set in environment variables");
}

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(apiKey!);

// Use gemini-1.0-pro instead of gemini-pro (the model name may have changed)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: NextRequest) {
  console.log("Received upload request");
  try {
    const formData = await request.formData();
    const files = formData.getAll("files");
    console.log("Files received:", files.length);

    const summaries = [];

    for (const file of files) {
      if (file instanceof File && file.type === "application/pdf") {
        console.log("Processing file:", file.name, file.size);

        try {
          // Read file as array buffer and convert to Buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          // Pass the buffer directly to pdf-parse
          const pdfData = await pdfParse(buffer, {
            max: 0, // No page limit
          });

          console.log("PDF parsed successfully, pages:", pdfData.numpages);
          const extractedText = pdfData.text;

          // Format a prompt that asks for structured information
          const prompt = `You are a helpful assistant trained to analyze and summarize complex business and real estate documents. Analyze the following PDF content in detail and provide a comprehensive brief that includes:

1. **Executive Summary** – Describe the purpose of the document, who it's intended for, and what opportunity or subject it covers.
2. **Property Overview** – Include key facts about the property such as location, tenant, lease terms, building specs, financials, etc.
3. **Market Insights** – Highlight information related to e-commerce trends, industrial/logistics demand, and NYC borough logistics.
4. **Investment Rationale** – Explain why this property might be attractive to investors, including financial returns, risk, and value drivers.
5. **Comparables & Financials** – Summarize the comps and projected financials or net operating income mentioned.
6. **Strategic Importance to Amazon** – Elaborate on why this property is considered mission critical in Amazon’s logistics strategy.
7. **Sentiment Analysis** – Briefly indicate the overall tone of the document (positive, neutral, negative) and reasoning.

Avoid redundancy and do not rephrase the full content — your task is to *synthesize* it into a structured, business-level briefing. Write in **professional tone**.

PDF Content:
${extractedText.substring(0, 25000)}`;

          // Call Gemini API with the updated model name
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const summaryText = response.text();

          // Parse the response to extract key points and sentiment
          const keyPointsMatch = summaryText.match(
            /key points:(.*?)(?=sentiment:|$)/is
          );
          const sentimentMatch = summaryText.match(/sentiment:(.*?)(?=$)/is);

          const keyPoints = keyPointsMatch
            ? keyPointsMatch[1]
                .split(/[\n•-]/)
                .filter((point) => point.trim().length > 0)
                .map((point) => point.trim())
            : [];

          const sentiment = sentimentMatch ? sentimentMatch[1].trim() : "";

          // Extract just the summary part
          const summaryMatch = summaryText.match(
            /summary:(.*?)(?=key points:|$)/is
          );
          const summary = summaryMatch ? summaryMatch[1].trim() : summaryText;

          summaries.push({
            fileName: file.name,
            summary: {
              title: file.name,
              summary: summary,
              keyPoints: keyPoints,
              sentiment: sentiment,
            },
          });
        } catch (pdfError) {
          console.error(`Error processing PDF ${file.name}:`, pdfError);
          // Add error information to the summaries
          summaries.push({
            fileName: file.name,
            summary: {
              title: file.name,
              summary: `Error processing PDF: ${
                pdfError instanceof Error ? pdfError.message : "Unknown error"
              }`,
              keyPoints: ["Failed to process this document"],
              sentiment: "negative",
            },
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      results: summaries,
    });
  } catch (error) {
    console.error("Error in upload handler:", error);
    return NextResponse.json(
      {
        error: "Failed to process upload",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
