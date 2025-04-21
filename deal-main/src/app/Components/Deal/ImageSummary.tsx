import React from 'react';

export default function ImageSummary() {
  return (
    <div className=" max-w-full flex flex-col lg:flex-row bg-white  overflow-hidden ">

      {/* Left Section - Deal Summary */}
      <div className="p-6 flex-1 ">

        <div className="border-r-1 border-gray-200">
        <h2 className="text-lg font-medium text-[#71717A] mb-2">Deal Summary</h2>
        <p className="text-black mb-4">
          280 Richards, fully leased to Amazon, aligns with HUSPP&apos;s strategy of acquiring prime logistics assets in 
          Brooklyn&apos;s high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent 
          escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon&apos;s 
          investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP&apos;s 
          portfolio.
        </p>


<h3 className="text-lg font-medium text-[#71717A] mb-2">Personalized Insights</h3>
<ul className="space-y-2 text-black">
  <li className="flex items-start">
    <span className="font-medium mr-1">•</span> 
    <span>Jake Klein viewed this deal in 2019, but decided not to proceed due to <span className="underline" style={{ color: '#0001EF', textDecorationColor: '#0001EF' }}>
  lack of potential upside
</span>
    .</span>
  </li>
  <li className="flex items-start">
    <span className="font-medium mr-1">•</span>
    <span>On 10/19/2021, your firm bid on <span className="underline" style={{ color: '#0001EF', textDecorationColor: '#0001EF' }}>55 Bay St, Brooklyn, NY 11231</span>, a large site also occupied by Amazon 0.5 miles away. <span className="underline" style={{ color: '#0001EF', textDecorationColor: '#0001EF' }}>Brookfield won the deal for $45M</span>; cap rates in the area have compressed 45bps since then.</span>
  </li>
  <li className="flex items-start">
    <span className="font-medium mr-1">•</span>
    <span>On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven <span className="underline" style={{ color: '#0001EF', textDecorationColor: '#0001EF' }}>renewed demand for infill industrial in Brooklyn</span>.</span>
  </li>
</ul>
      </div>
      </div>
      {/* Right Section - Asset-Level Data */}
      <div className=" p-6 space-x-2">

        <div>
        <h2 className="text-base font-medium text-[#71717A] mb-3 flex justify-center items-center py-4">Asset-Level Data</h2>
        
        <div className="space-y-2 px-16 pt-2">
          <div className="flex items-center gap-[70px]">
            <div className="flex gap-1 items-center">
            <div className="w-10 text-gray-500">
              <img src="height.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Clear Heights</p>
              <p className="font-semibold text-lg">36&apos;</p>
            </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="flex gap-1 items-center">
            <div className="w-10 text-gray-500">
            <img src="person-standing.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Tenant</p>
              <p className="font-semibold text-lg">Amazon</p>
            </div>
          </div>
          </div>
          </div>
          <div className="flex items-center gap-14">

          <div className="flex gap-1 items-center">
            <div className="w-10 text-gray-500">
            <img src="columnSpacing.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Column Spacing</p>
              <p className="font-semibold text-lg">63&apos; X 54&apos;</p>
            </div>
            </div>
            
            <div className="flex  items-center gap-1">
            <div className="w-10 text-gray-500">
            <img src="seaArea.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Sq/Ft Area</p>
              <p className="font-semibold text-lg">357,151 sqft</p>
            </div>
          </div>
          </div>
          <div className="flex items-center gap-16">
          <div className="flex gap-1 items-center">
            <div className="w-10 text-gray-500">
            <img src="parking.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Parking Spaces</p>
              <p className="font-semibold text-lg">393</p>
            </div>
            </div>
            <div className="flex  items-center gap-1">
            <div className="w-10 text-gray-500">
             <img src="year-built.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Year Built</p>
              <p className="font-semibold text-lg">2021</p>
            </div>
          </div></div>

          <div className="flex items-center gap-16">
          <div className="flex gap-1 items-center">
            <div className="w-10 text-gray-500">
             <img src="doors.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500"># of Dock Doors</p>
              <p className="font-semibold text-lg">28</p>
            </div>
            </div>
            <div className="flex gap-2 items-center ">
            <div className="w-10 text-gray-500">
              <img src="occupancy-rate.svg"></img>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Occupancy Rate</p>
              <p className="font-semibold text-lg">100%</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}