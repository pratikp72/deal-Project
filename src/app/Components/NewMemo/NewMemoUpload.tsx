// components/NewMemoUpload.tsx
import { JSX, useRef, useState } from 'react';
import FilesUploaded from './FileUpload';

// Define types for our file objects
interface UploadedFile {
  name: string;
  type: string;
  size: number;
  file: File;
  url: string;
}

export default function NewMemoUpload(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showUploadedFiles, setShowUploadedFiles] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAreaClick = (): void => {
    // Trigger the hidden file input when the area is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    
    if (files && files.length > 0) {
      // Create file objects with appropriate data
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file, // Store the actual file for later upload
        // Create a URL for preview if needed
        url: URL.createObjectURL(file)
      }));
      
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
      setShowUploadedFiles(true);  // Show the uploaded files component
    }
  };

  // Handle file drop functionality
  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const files = Array.from(event.dataTransfer.files);
      
      const newFiles: UploadedFile[] = files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file,
        url: URL.createObjectURL(file)
      }));
      
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
      setShowUploadedFiles(true);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Remove a specific file
  const removeFile = (indexToRemove: number): void => {
    setUploadedFiles(prevFiles => 
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
    
    // If all files are removed, show the upload area again
    if (uploadedFiles.length <= 1) {
      setShowUploadedFiles(false);
    }
  };

  // Add more files to existing selection
  const addMoreFiles = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {!showUploadedFiles ? (
        <div 
          onClick={handleAreaClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="flex flex-col mt-2 items-center justify-center hover:border-2 hover:border-dashed border-gray-300 rounded-lg h-96 cursor-pointer"
        >
          <div className="flex items-center justify-center mb-2">
            <img src="upload.png" alt="Upload Icon" className="" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Drag & Drop</p>
          <div className="flex items-center text-sm">
            <span className="text-gray-500">or</span>
            <button type="button" className="ml-1 font-semibold">Browse</button>
          </div>
          
          {/* Hidden file input that gets triggered when the area is clicked */}
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <FilesUploaded 
          files={uploadedFiles} 
          onReset={() => {
            setShowUploadedFiles(false);
            setUploadedFiles([]);
          }}
          onRemoveFile={removeFile}
          onAddMore={addMoreFiles}
        />
      )}
    </>
  );
}
