// components/FilesUploaded.tsx
import { useRouter } from 'next/navigation';
import React, { JSX, useEffect, useState } from 'react';

// Define types for our component props and file objects
interface UploadedFile {
  name: string;
  type: string;
  size: number;
  file: File;
  url: string;
}

interface SummaryResult {
  fileName: string;
  summary: {
    title: string;
    summary: string;
    keyPoints: string[];
    sentiment: string;
  };
}

interface FilesUploadedProps {
  files: UploadedFile[];
  onReset: () => void;
  onRemoveFile: (index: number) => void;
  onAddMore: () => void;
  onSummaryReceived?: (results: SummaryResult[]) => void;
}

export default function FilesUploaded({
  files = [],
  onRemoveFile,
  onSummaryReceived
}: FilesUploadedProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [summaryResults, setSummaryResults] = useState<SummaryResult[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Clear summaries when file list changes
    setSummaryResults([]);
  }, [files]);

  // Helper function to get the appropriate icon based on file type
  const getFileIcon = (fileType: string): string => {
    if (fileType.includes('pdf')) {
      return "pdf.png";
    } else if (
      fileType.includes('spreadsheet') ||
      fileType.includes('excel') ||
      fileType.includes('xlsx') ||
      fileType.includes('csv') ||
      fileType.includes('xls')
    ) {
      return "excel.png";
    } else if (fileType.includes('image')) {
      return "image.png";
    } else if (fileType.includes('word') || fileType.includes('doc')) {
      return "doc.png";
    } else {
      return "file.png"; // Generic file icon
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (files.length === 0) {
      setError('Please upload at least one file');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      files.forEach(fileObj => {
        formData.append('files', fileObj.file);
      });

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload files');
      }

      const data = await response.json();

      if (data.success) {
        setSummaryResults(data.results);
        if (onSummaryReceived) {
          onSummaryReceived(data.results);
        }

        router.push('/deal?data=' + encodeURIComponent(JSON.stringify(data.results)));
      } else {
        setError('Failed to process files');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <p className="mb-3 text-lg font-medium text-[#71717A] text-center">Files Uploaded:</p>

        <div className="flex flex-col items-start mb-4">
          {files.map((file, index) => {
            const fileSummary = summaryResults.find(summary => summary.fileName === file.name);
            return (
              <div key={index} className="flex flex-col w-full mb-4 border-b pb-4">
                <div className="flex items-center justify-between w-full mb-2 pr-2">
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-2">
                      <img src={getFileIcon(file.type)} alt="File icon" className="h-12 w-12" />
                    </div>
                    <a
                      href={file.url}
                      className="underline text-[#09090B] text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  </div>
                  <button
                    onClick={() => onRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove file"
                  >
                    ✕
                  </button>
                </div>

                {fileSummary && (
                  <div className="bg-gray-100 text-sm text-gray-800 rounded p-4 mt-2 w-full">
                    <strong>Summary:</strong>
                    <p className="mt-1 whitespace-pre-wrap">
                      {fileSummary.summary.summary}
                    </p>

                    <div className="mt-2">
                      <strong>Key Points:</strong>
                      <ul className="list-disc list-inside ml-4">
                        {fileSummary.summary.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-2">
                      <strong>Sentiment:</strong> {fileSummary.summary.sentiment}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex justify-center space-x-4 w-full">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`${
                isLoading ? 'bg-gray-500' : 'bg-[#18181B] hover:bg-gray-900'
              } text-white py-1.5 mt-2 px-4 rounded text-sm w-32 flex items-center justify-center`}
            >
              {isLoading ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
