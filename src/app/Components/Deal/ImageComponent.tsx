import React from 'react';

export const ImageComponent = () => {
  const statItems = [
    { icon: "/person.svg", label: "Seller", value: "Thor Equities" },
    { icon: "/doller.svg", label: "Guidance Price", value: "$143,000,000" },
    { icon: "/doller.svg", label: "Guidance Price PSF", value: "$23.92" },
    { icon: "/scale.svg", label: "Cap Rate", value: "5.0%" },
    { icon: "/scale.svg", label: "Property Size", value: "312,000 sqft" },
    { icon: "/scan.svg", label: "Land Area", value: "16 acres" },
    { icon: "/hammer.svg", label: "Zoning", value: "M-2" }
  ];

  return (
    <div className="mx-auto p-4 bg-white  border-b-1 border-b-[#E4E4E7]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Property Image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/image.png" 
            alt="280 Richards, Brooklyn, NY"
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
              <h1 className="text-2xl font-bold">280 Richards, Brooklyn, NY</h1>
              <div className="text-gray-600 text-sm">
                Date Uploaded: 11/06/2024
              </div>
              <div className="text-gray-700 mb-4">Warehouse</div>
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

          {/* Property Stats with Headers */}
          <div className=" p-2 mb-4">
            <div className="flex justify-between items-start">
              {statItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center px-2">
                  <div className="text-gray-600 text-xs mb-1 flex items-center gap-1">
                    <img src={item.icon} alt="img" className=""></img>
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