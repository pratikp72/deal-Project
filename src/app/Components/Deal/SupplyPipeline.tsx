// import React from "react";
// import { ImageComponentProps } from "./ImageComponent";

// interface SupplyData {
//   image: string;
//   address: string;
//   submarket: string;
//   deliveryDate: string;
//   owner: string;
//   sf: string;
// }

// interface ComparableData {
//   image: string;
//   address: string;
//   submarket: string;
//   date: string;
//   sf: string;
//   owner: string;
//   pp: string;
//   tenant: string;
// }

// const SupplyItem = ({ data }: { data: SupplyData }) => (
//   <div className="flex space-x-4">
//     <img
//       src={data.image}
//       alt={data.address}
//       className="rounded-lg h-36 w-40 object-cover"
//     />
//     <div className="flex flex-col text-sm">
//       <div>
//         <span className="font-semibold">Address:</span> {data.address}
//       </div>
//       <div>
//         <span className="font-semibold">Submarket:</span> {data.submarket}
//       </div>
//       <div>
//         <span className="font-semibold">Delivery Date:</span>{" "}
//         {data.deliveryDate}
//       </div>
//       <div>
//         <span className="font-semibold">Owner:</span> {data.owner}
//       </div>
//       <div>
//         <span className="font-semibold">SF:</span> {data.sf}
//       </div>
//     </div>
//   </div>
// );

// const ComparableItem = ({ data }: { data: ComparableData }) => (
//   <div className="w-1/2 flex">
//     <div className="flex space-x-4">
//       <img
//         src={data.image}
//         alt={data.address}
//         className="rounded-lg h-36 w-40 object-cover"
//       />
//       <div className="flex flex-col text-sm">
//         <div>
//           <span className="font-semibold">Address:</span> {data.address}
//         </div>
//         <div>
//           <span className="font-semibold">Submarket:</span> {data.submarket}
//         </div>
//         <div>
//           <span className="font-semibold">Date:</span> {data.date}
//         </div>
//         <div>
//           <span className="font-semibold">SF:</span> {data.sf}
//         </div>
//         <div>
//           <span className="font-semibold">Owner:</span> {data.owner}
//         </div>
//         <div>
//           <span className="font-semibold">PP:</span> {data.pp}
//         </div>
//         <div>
//           <span className="font-semibold">Tenant:</span> {data.tenant}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export const SupplyPipeline: React.FC<ImageComponentProps> = ({
//   summaryData,
// }) => {
//   console.log(`summaryData`, summaryData);
//   const supplyData: SupplyData[] = [
//     {
//       image: "/image (1).png",
//       address: "640 Columbia",
//       submarket: "Brooklyn",
//       deliveryDate: "Jun-25",
//       owner: "CBRE",
//       sf: "336,350",
//     },
//     {
//       image: "/image (4).png",
//       address: "WB Mason",
//       submarket: "Bronx",
//       deliveryDate: "May-25",
//       owner: "Link Logistics",
//       sf: "150,000",
//     },
//   ];

//   const comparableData: ComparableData[][] = [
//     [
//       {
//         image: "/image (2).png",
//         address: "1 Debaun Road",
//         submarket: "Millstone, NJ",
//         date: "Jun-24",
//         sf: "132,930",
//         owner: "Cabot",
//         pp: "$41,903,580",
//         tenant: "Berry Plastics",
//       },
//       {
//         image: "/image (3).png",
//         address: "Baylis 495 Business Park",
//         submarket: "Melville, NY",
//         date: "May-24",
//         sf: "103,500",
//         owner: "Bethel Green",
//         pp: "$44,000,000",
//         tenant: "Dr. Pepper",
//       },
//     ],
//     [
//       {
//         image: "/image (5).png",
//         address: "39 Edgeboro Road",
//         submarket: "Millstone, NJ",
//         date: "Oct-23",
//         sf: "513,240",
//         owner: "Blackstone",
//         pp: "$165,776,520",
//         tenant: "FedEx",
//       },
//       {
//         image: "/image (6).png",
//         address: "Terminal Logistics Center",
//         submarket: "Queens, NY",
//         date: "Mar-23",
//         sf: "336,000",
//         owner: "Goldman",
//         pp: "$136,000,000",
//         tenant: "Do & Co",
//       },
//     ],
//   ];

//   return (
//     <div className="flex flex-col space-y-6 overflow-hidden">
//       <div className="flex w-full">
//         <div className="w-3/10 border-r border-gray-200 pr-4">
//           <div className="font-bold text-xl mb-6">Supply Pipeline</div>

//           <div className="flex flex-col space-y-6">
//             {supplyData.map((supply, index) => (
//               <SupplyItem key={index} data={supply} />
//             ))}
//           </div>
//         </div>

//         <div className="w-7/10 pl-4">
//           <div className="font-bold text-xl mb-6">Sale Comparables</div>

//           <div className="flex flex-col space-y-6">
//             {supplyData.map((_, index) => (
//               <div key={index} className="flex w-full">
//                 {comparableData[index].map((comp, idx) => (
//                   <ComparableItem key={idx} data={comp} />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React from "react";
// import { ImageComponentProps } from "./ImageComponent";

// interface SupplyData {
//   image?: string;
//   address: string;
//   submarket: string;
//   deliveryDate: string;
//   owner: string;
//   sf: string;
// }

// interface ComparableData {
//   image?: string;
//   address: string;
//   submarket: string;
//   date: string;
//   sf: string;
//   owner: string;
//   pp: string;
//   tenant: string;
// }

// const SupplyItem = ({ data }: { data: SupplyData }) => (
//   <div className="flex space-x-4">
//     <img
//       src={data.image || "/placeholder.png"}
//       alt={data.address}
//       className="rounded-lg h-36 w-40 object-cover"
//     />
//     <div className="flex flex-col text-sm">
//       <div><span className="font-semibold">Address:</span> {data.address}</div>
//       <div><span className="font-semibold">Submarket:</span> {data.submarket}</div>
//       <div><span className="font-semibold">Delivery Date:</span> {data.deliveryDate}</div>
//       <div><span className="font-semibold">Owner:</span> {data.owner}</div>
//       <div><span className="font-semibold">SF:</span> {data.sf}</div>
//     </div>
//   </div>
// );

// const ComparableItem = ({ data }: { data: ComparableData }) => (
//   <div className="w-1/2 flex">
//     <div className="flex space-x-4">
//       <img
//         src={data.image || "/placeholder.png"}
//         alt={data.address}
//         className="rounded-lg h-36 w-40 object-cover"
//       />
//       <div className="flex flex-col text-sm">
//         <div><span className="font-semibold">Address:</span> {data.address}</div>
//         <div><span className="font-semibold">Submarket:</span> {data.submarket}</div>
//         <div><span className="font-semibold">Date:</span> {data.date}</div>
//         <div><span className="font-semibold">SF:</span> {data.sf}</div>
//         <div><span className="font-semibold">Owner:</span> {data.owner}</div>
//         <div><span className="font-semibold">PP:</span> {data.pp}</div>
//         <div><span className="font-semibold">Tenant:</span> {data.tenant}</div>
//       </div>
//     </div>
//   </div>
// );

// export const SupplyPipeline: React.FC<ImageComponentProps> = ({ summaryData }) => {
//   if (!summaryData || summaryData.length === 0) return null;

//   const parsedJSON = (() => {
//     try {
//       const raw = summaryData[0]?.summary?.summary;
//       return JSON.parse(raw.replace(/```json|```/g, "").trim());
//     } catch (err) {
//       console.error("Failed to parse summary JSON:", err);
//       return null;
//     }
//   })();

//   if (!parsedJSON) return null;

//   const supplyData: SupplyData[] = (parsedJSON.supplyPipeline || []).map((item: any) => ({
//     image: "/image (1).png", // You can assign image paths dynamically if needed
//     address: item.address || "N/A",
//     submarket: item.submarket || "N/A",
//     deliveryDate: item.deliveryDate || "N/A",
//     owner: item.owner || "N/A",
//     sf: item.size || "N/A"
//   }));

//   const comparableDataFlat: ComparableData[] = (parsedJSON.saleComparables || []).map((item: any, index: number) => ({
//     image: `/image (${(index % 6) + 2}).png`, // Rotate demo images or replace with real ones
//     address: item.address || "N/A",
//     submarket: item.submarket || "N/A",
//     date: item.date || "N/A",
//     sf: item.sf || "N/A",
//     owner: item.owner || "N/A",
//     pp: item.ppsf || "N/A",
//     tenant: item.tenant || "N/A"
//   }));

//   // Chunk comparables in groups of 2 to display in rows
//   const chunkArray = (arr: ComparableData[], size: number) => {
//     return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
//       arr.slice(i * size, i * size + size)
//     );
//   };

//   const comparableData: ComparableData[][] = chunkArray(comparableDataFlat, 2);

//   return (
//     <div className="flex flex-col space-y-6 overflow-hidden">
//       <div className="flex w-full">
//         {/* Supply Pipeline */}
//         <div className="w-3/10 border-r border-gray-200 pr-4">
//           <div className="font-bold text-xl mb-6">Supply Pipeline</div>
//           <div className="flex flex-col space-y-6">
//             {supplyData.length > 0 ? (
//               supplyData.map((supply, index) => (
//                 <SupplyItem key={index} data={supply} />
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">No upcoming supply pipeline available.</p>
//             )}
//           </div>
//         </div>

//         {/* Sale Comparables */}
//         <div className="w-7/10 pl-4">
//           <div className="font-bold text-xl mb-6">Sale Comparables</div>
//           <div className="flex flex-col space-y-6">
//             {comparableData.map((row, rowIdx) => (
//               <div key={rowIdx} className="flex w-full">
//                 {row.map((comp, idx) => (
//                   <ComparableItem key={idx} data={comp} />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };








import React from "react";
import { ImageComponentProps } from "./ImageComponent";

interface SupplyData {
  address: string;
  submarket: string;
  deliveryDate: string;
  owner: string;
  sf: string;
}

interface ComparableData {
  address: string;
  submarket: string;
  date: string;
  sf: string;
  owner: string;
  pp: string;
  tenant: string;
}

const SupplyItem = ({ data, imageIndex }: { data: SupplyData; imageIndex: number }) => (
  <div className="flex space-x-4">
    {/* Use direct placeholder with specific dimensions */}
    <div className="h-36 w-40 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Building {imageIndex + 1}</span>
    </div>
    <div className="flex flex-col text-sm">
      <div><span className="font-semibold">Address:</span> {data.address}</div>
      <div><span className="font-semibold">Submarket:</span> {data.submarket}</div>
      <div><span className="font-semibold">Delivery Date:</span> {data.deliveryDate}</div>
      <div><span className="font-semibold">Owner:</span> {data.owner}</div>
      <div><span className="font-semibold">SF:</span> {data.sf}</div>
    </div>
  </div>
);

const ComparableItem = ({ data, imageIndex }: { data: ComparableData; imageIndex: number }) => (
  <div className="w-1/2 flex">
    <div className="flex space-x-4">
      {/* Use direct placeholder with specific dimensions */}
      <div className="h-36 w-40 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Property {imageIndex + 1}</span>
      </div>
      <div className="flex flex-col text-sm">
        <div><span className="font-semibold">Address:</span> {data.address}</div>
        <div><span className="font-semibold">Submarket:</span> {data.submarket}</div>
        <div><span className="font-semibold">Date:</span> {data.date}</div>
        <div><span className="font-semibold">SF:</span> {data.sf}</div>
        <div><span className="font-semibold">Owner:</span> {data.owner}</div>
        <div><span className="font-semibold">PP:</span> {data.pp}</div>
        <div><span className="font-semibold">Tenant:</span> {data.tenant}</div>
      </div>
    </div>
  </div>
);

export const SupplyPipeline: React.FC<ImageComponentProps> = ({ summaryData }) => {
  // Fallback to static data if dynamic data isn't available
  const defaultSupplyData: SupplyData[] = [
    {
      address: "640 Columbia",
      submarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CBRE",
      sf: "336,350",
    },
    {
      address: "WB Mason",
      submarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
  ];

  const defaultComparableData: ComparableData[] = [
    {
      address: "1 Debaun Road",
      submarket: "Millstone, NJ",
      date: "Jun-24",
      sf: "132,930",
      owner: "Cabot",
      pp: "$41,903,580",
      tenant: "Berry Plastics",
    },
    {
      address: "Baylis 495 Business Park",
      submarket: "Melville, NY",
      date: "May-24",
      sf: "103,500",
      owner: "Bethel Green",
      pp: "$44,000,000",
      tenant: "Dr. Pepper",
    },
    {
      address: "39 Edgeboro Road",
      submarket: "Millstone, NJ",
      date: "Oct-23",
      sf: "513,240",
      owner: "Blackstone",
      pp: "$165,776,520",
      tenant: "FedEx",
    },
    {
      address: "Terminal Logistics Center",
      submarket: "Queens, NY",
      date: "Mar-23",
      sf: "336,000",
      owner: "Goldman",
      pp: "$136,000,000",
      tenant: "Do & Co",
    },
  ];

  // Parse JSON data from summaryData if available
  const parsedJSON = (() => {
    try {
      if (!summaryData || summaryData.length === 0) return null;
      const raw = summaryData[0]?.summary?.summary;
      if (!raw) return null;
      return JSON.parse(raw.replace(/```json|```/g, "").trim());
    } catch (err) {
      console.error("Failed to parse summary JSON:", err);
      return null;
    }
  })();

  // Use dynamic data if available, otherwise fall back to static data
  const supplyData: SupplyData[] = parsedJSON?.supplyPipeline?.length > 0
    ? parsedJSON.supplyPipeline.map((item: any) => ({
        address: item.address || "N/A",
        submarket: item.submarket || "N/A",
        deliveryDate: item.deliveryDate || "N/A",
        owner: item.owner || "N/A",
        sf: item.size || item.sf || "N/A"
      }))
    : defaultSupplyData;

  // Get comparable data and limit to exactly 4 items
  const comparableDataFlat: ComparableData[] = (() => {
    if (parsedJSON?.saleComparables?.length > 0) {
      // Get first 4 items from dynamic data
      const data = parsedJSON.saleComparables
        .slice(0, 4)
        .map((item: any) => ({
          address: item.address || "N/A",
          submarket: item.submarket || "N/A",
          date: item.date || "N/A",
          sf: item.sf || item.size || "N/A",
          owner: item.owner || "N/A",
          pp: item.ppsf || item.pp || "N/A",
          tenant: item.tenant || "N/A"
        }));
      
      // Pad with default data if we have fewer than 4 items
      while (data.length < 4) {
        const index = data.length % defaultComparableData.length;
        data.push(defaultComparableData[index]);
      }
      
      return data;
    }
    
    // Use default data (limited to 4)
    return defaultComparableData.slice(0, 4);
  })();

  // Chunk comparables into rows of 2
  const comparableData: ComparableData[][] = [
    comparableDataFlat.slice(0, 2),
    comparableDataFlat.slice(2, 4)
  ];

  return (
    <div className="flex flex-col space-y-6 overflow-hidden">
      <div className="flex w-full">
        {/* Supply Pipeline */}
        <div className="w-3/10 border-r border-gray-200 pr-4">
          <div className="font-bold text-xl mb-6">Supply Pipeline</div>
          <div className="flex flex-col space-y-6">
            {supplyData.length > 0 ? (
              supplyData.map((supply, index) => (
                <SupplyItem key={index} data={supply} imageIndex={index} />
              ))
            ) : (
              <p className="text-sm text-gray-500">No upcoming supply pipeline available.</p>
            )}
          </div>
        </div>

        {/* Sale Comparables - always show 4 items in 2 rows */}
        <div className="w-7/10 pl-4">
          <div className="font-bold text-xl mb-6">Sale Comparables</div>
          <div className="flex flex-col space-y-6">
            {comparableData.map((row, rowIdx) => (
              <div key={rowIdx} className="flex w-full">
                {row.map((comp, idx) => (
                  <ComparableItem 
                    key={idx} 
                    data={comp} 
                    imageIndex={rowIdx * 2 + idx} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};