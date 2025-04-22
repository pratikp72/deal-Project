// src/app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Import pdf-parse with a different approach
import pdfParse from "pdf-parse/lib/pdf-parse.js";
// import pdfParse from "pdf-parse";

// Check the API key is available
const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  // console.error("GOOGLE_API_KEY is not set in environment variables");
}

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(apiKey!);

// Use gemini-1.0-pro instead of gemini-pro (the model name may have changed)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: NextRequest) {
  // console.log("Received upload request");
  try {
    const formData = await request.formData();
    const files = formData.getAll("files");
    // console.log("Files received:", files.length);

    const summaries = [];

    for (const file of files) {
      if (file instanceof File && file.type === "application/pdf") {
        // console.log("Processing file:", file.name, file.size);

        try {
          // Read file as array buffer and convert to Buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          // Pass the buffer directly to pdf-parse
          const pdfData = await pdfParse(buffer, {
            max: 0, // No page limit
          });

          // console.log("PDF parsed successfully, pages:", pdfData.numpages);
          const extractedText = pdfData.text;

          // Format a prompt that asks for structured information
          const prompt = `You are a highly intelligent assistant trained to extract key structured business data from real estate offering memorandums. From the content below, extract the relevant information and return it in a clear, structured JSON format that matches this schema for display in a dashboard:

{
  "title": "Property Name and Location",
  "updatedDate": "Date",
  "propertyType": "Type (e.g., Warehouse)",
  "summary": "A brief summary of the opportunity (2–3 sentences)",
  "overview": {
    "seller": "Seller Name",
    "guidancePrice": "$",
    "pricePSF": "$",
    "capRate": "%",
    "propertySize": "Sq ft",
    "landArea": "Acres",
    "zoning": "Zoning"
  },
  "tenant": {
    "name": "Tenant",
    "size": "Sq ft",
    "occupancyYear": "Year",
    "occupancyRate": "%",
    "leaseTerm": "13 Yrs (Sep 37)",
    "rentPSF": "$ per sq ft"
  },
  "metrics": {
    "projectedReturn": "%",
    "exitMultiple": "x",
    "leveredIRR": "%"
  },
  "assumptions": {
    "purchasePrice": "$",
    "exitCapRate": "%",
    "financingRate": "%",
    "holdPeriod": "Years"
  },
  "marketAnalysis": {
    "submarket": "Location",
    "vacancy": "%",
    "marketRent": "$",
    "marketCapRate": "%"
  },
  "leaseTerms": {
    "rent": "$",
    "term": "13 Yrs",
    "escalations": "%",
    "markToMarketOpportunity": "%"
  },
  "supplyPipeline": [
    {
      "address": "Address",
      "submarket": "Submarket",
      "deliveryDate": "Date",
      "owner": "Owner",
      "size": "Sq ft"
    }
  ],
  "saleComparables": [
    {
      "address": "Address",
      "submarket": "Submarket",
      "date": "Month-Year",
      "sf": "Size",
      "ppsf": "$",
      "capRate": "%",
      "owner": "Buyer",
      "tenant": "Tenant"
    }
  ]
}

Avoid repetition. Do not generate markdown. Return **only the JSON** based on this structure. Focus on accuracy and extract only what's clearly stated in the PDF.

PDF Content:
${extractedText.substring(0, 25000)}
`;

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
          // console.error(`Error processing PDF ${file.name}:`, pdfError);
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
    // console.error("Error in upload handler:", error);
    return NextResponse.json(
      {
        error: "Failed to process upload",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
