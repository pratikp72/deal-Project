// components/FilesUploaded.tsx
import React, { JSX } from 'react';

// Define types for our component props and file objects
interface UploadedFile {
  name: string;
  type: string;
  size: number;
  file: File;
  url: string;
}

interface FilesUploadedProps {
  files: UploadedFile[];
  onReset: () => void;
  onRemoveFile: (index: number) => void;
  onAddMore: () => void;
  onSubmit?: (formData: FormData) => void;
}

export default function FilesUploaded({
  files = [],
  onReset,
  onRemoveFile,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAddMore,
  onSubmit
}: FilesUploadedProps): JSX.Element {
  // Helper function to get the appropriate icon based on file type
  const getFileIcon = (fileType: string): string => {
    if (fileType.includes('pdf')) {
      return "pdf.png";
    } else if (
      fileType.includes('spreadsheet') || 
      fileType.includes('excel') || 
      fileType.includes('xlsx') || 
      fileType.includes('xls')
    ) {
      return "excel.png";
    } else if (fileType.includes('image')) {
      return "image.png"; // You'll need this icon
    } else if (fileType.includes('word') || fileType.includes('doc')) {
      return "doc.png"; // You'll need this icon
    } else {
      return "file.png"; // Generic file icon
    }
  };

  const handleSubmit = (): void => {
    // Here you can implement your Multer upload logic
    const formData = new FormData();
    files.forEach(fileObj => {
      formData.append('files', fileObj.file);
    });
    
    // Then send to your backend
    // const response = await fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // });

    // Call the onSubmit prop if provided
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <p className="mb-3 text-lg font-medium text-[#71717A]">Files Uploaded:</p>
        
        <div className="flex flex-col items-start mb-4">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between w-full mb-2 pr-2">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-2">
                  <img src={getFileIcon(file.type)} alt="File icon" className="h-12 w-12" />
                </div>
                <a href={file.url} className="underline text-[#09090B] text-base" target="_blank" rel="noopener noreferrer">
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
          ))}
        </div>
        
        <div className="flex flex-col items-center space-y-2 w-full">
          {/* <button 
            onClick={onAddMore}
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-1.5 px-4 rounded text-sm w-full max-w-xs"
          >
            Add More Files
          </button> */}
          
          <div className="flex justify-center space-x-4 w-full">
            <button 
              onClick={onReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1.5 mt-2 px-4 rounded text-sm w-32"
            >
              Reset
            </button>
            <button 
              onClick={handleSubmit}
              className="bg-[#18181B] hover:bg-gray-900 text-white py-1.5 mt-2 px-4 rounded text-sm w-32"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}