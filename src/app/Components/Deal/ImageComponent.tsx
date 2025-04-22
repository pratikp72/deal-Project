// import React from 'react';

// export interface ImageComponentProps {
//   summaryData: unknown; // Replace 'any' with the actual type if known
// }

// export const ImageComponent: React.FC<ImageComponentProps> = ({ summaryData }) => {
//   console.log(`summaryData`, summaryData);
//   const statItems = [
//     { icon: "/person.svg", label: "Seller", value: "Thor Equities" },
//     { icon: "/doller.svg", label: "Guidance Price", value: "$143,000,000" },
//     { icon: "/doller.svg", label: "Guidance Price PSF", value: "$23.92" },
//     { icon: "/scale.svg", label: "Cap Rate", value: "5.0%" },
//     { icon: "/scale.svg", label: "Property Size", value: "312,000 sqft" },
//     { icon: "/scan.svg", label: "Land Area", value: "16 acres" },
//     { icon: "/hammer.svg", label: "Zoning", value: "M-2" }
//   ];

//   return (
//     <div className="mx-auto p-4 bg-white  border-b-1 border-b-[#E4E4E7]">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Property Image */}
//         <div className="md:w-1/3 relative">
//           <img 
//             src="/image.png" 
//             alt="280 Richards, Brooklyn, NY"
//             className="absolute w-[333px] h-[187px] top-[-20px] left-[46px] object-cover rounded-[16px]"
//           />
//           <div className="absolute bottom-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded text-xs">
//             Click for Google Street View
//           </div>
//         </div>

//         {/* Property Details */}
//         <div className="md:w-2/3">
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex flex-col gap-2">
//               <h1 className="text-2xl font-bold">280 Richards, Brooklyn, NY</h1>
//               <div className="text-gray-600 text-sm">
//                 Date Uploaded: 11/06/2024
//               </div>
//               <div className="text-gray-700 mb-4">Warehouse</div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <button className="bg-black text-white px-4 py-1 rounded-md text-sm">
//                 Export to Excel
//               </button>
//               <button className="bg-black text-white px-4 py-1 rounded-md text-sm">
//                 Generate PowerPoint
//               </button>
//             </div>
//           </div>

//           {/* Property Stats with Headers */}
//           <div className=" p-2 mb-4">
//             <div className="flex justify-between items-start">
//               {statItems.map((item, index) => (
//                 <div key={index} className="flex flex-col items-center text-center px-2">
//                   <div className="text-gray-600 text-xs mb-1 flex items-center gap-1">
//                     <img src={item.icon} alt="img" className=""></img>
//                     <span>{item.label}</span>
//                   </div>
//                   <div className="text-gray-800 text-sm font-medium">
//                     {item.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageComponent;  



import React from 'react';

export interface ImageComponentProps {
  summaryData: { summary: { summary: string } }[]; // Define a specific type for summaryData
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ summaryData }) => {
  if (!summaryData || summaryData.length === 0) return null;

  const parsedJSON = (() => {
    try {
      const raw = summaryData[0]?.summary?.summary;
      return JSON.parse(raw.replace(/```json|```/g, "").trim());
    } catch (err) {
      console.error("Failed to parse summary JSON:", err);
      return null;
    }
  })();

  if (!parsedJSON) return null;

  const overview = parsedJSON.overview || {};
  const property = parsedJSON.title || "Unknown Property";
  const updatedDate = parsedJSON.updatedDate || "Unknown Date";
  const propertyType = parsedJSON.propertyType || "Unknown Type";

  const statItems = [
    { icon: "/person.svg", label: "Seller", value: overview.seller || "N/A" },
    { icon: "/doller.svg", label: "Guidance Price", value: overview.guidancePrice || "N/A" },
    { icon: "/doller.svg", label: "Guidance Price PSF", value: overview.pricePSF || "N/A" },
    { icon: "/scale.svg", label: "Cap Rate", value: overview.capRate || "N/A" },
    { icon: "/scale.svg", label: "Property Size", value: `${overview.propertySize || "N/A"} sqft` },
    { icon: "/scan.svg", label: "Land Area", value: `${overview.landArea || "N/A"} acres` },
    { icon: "/hammer.svg", label: "Zoning", value: overview.zoning || "N/A" }
  ];

  return (
    <div className="mx-auto p-4 bg-white border-b-1 border-b-[#E4E4E7]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Property Image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/image.png" 
            alt={property}
            className="absolute w-[333px] h-[187px] top-[-20px] left-[46px] object-cover rounded-[16px]"
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded text-xs">
            Click for Google Street View
          </div>
        </div>

        {/* Property Details */}
        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{property}</h1>
              <div className="text-gray-600 text-sm">
                Date Uploaded: {updatedDate}
              </div>
              <div className="text-gray-700 mb-4">{propertyType}</div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-black text-white px-4 py-1 rounded-md text-sm">
                Export to Excel
              </button>
              <button className="bg-black text-white px-4 py-1 rounded-md text-sm">
                Generate PowerPoint
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="p-2 mb-4">
            <div className="flex justify-between items-start">
              {statItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center px-2">
                  <div className="text-gray-600 text-xs mb-1 flex items-center gap-1">
                    <img src={item.icon} alt="img" className="" />
                    <span>{item.label}</span>
                  </div>
                  <div className="text-gray-800 text-sm font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
