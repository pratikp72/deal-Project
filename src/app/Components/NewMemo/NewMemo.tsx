"use client";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../ReauseComp/Header';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FilesUploaded from './FileUpload';
import NewMemoUpload from './NewMemoUpload';

export default function Upload() {


    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // change this to your actual loading logic

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="min-h-screen bg-white ">
    

       <Navbar  navLinks={["New Upload", "Pipeline", "Settings"]}/>
      <div className="px-8 py-8">
      <Header title="Upload New Deal"/>

        
  {isLoading? ( <div className="flex items-center flex-col justify-center h-96 bg-white">
     
        <img src="loading.png"></img>
        <p className="mt-2 text-sm text-gray-600">Loading...</p>
      </div>
      ) : (

    <NewMemoUpload/>
    // <FilesUploaded/>    
    )
        
    }
      </div>
    </div>
  );
}