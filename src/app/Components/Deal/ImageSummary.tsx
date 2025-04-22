import React from 'react';
import { ImageComponentProps } from './ImageComponent';

export default function ImageSummary({ summaryData }: ImageComponentProps) {
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

  const tenant = parsedJSON.tenant || {};
  // const overview = parsedJSON.overview || {};
  const propertyTitle = parsedJSON.title || "Unknown Property";

  return (
    <div className="max-w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Section - Deal Summary */}
      <div className="p-6 flex-1">
        <div className="border-r-1 border-gray-200">
          <h2 className="text-lg font-medium text-muted-foreground mb-2">Deal Summary</h2>
          <p className="text-black mb-4">
            {parsedJSON.summary || `${propertyTitle}, fully leased to ${tenant.name || 'Amazon'}, with ${tenant.leaseTerm || 'N/A'} remaining on the lease and ${parsedJSON.leaseTerms?.escalations || 'N/A'}% annual rent escalations. The asset is located in ${parsedJSON.marketAnalysis?.submarket || 'a core logistics submarket'} and leased to an investment-grade tenant. It presents stable long-term returns with a strong renewal likelihood.`}
          </p>

          <h3 className="text-lg font-medium text-[#71717A] mb-2">Personalized Insights</h3>
          <ul className="space-y-2 text-black">
            <li className="flex items-start">
              <span className="font-medium mr-1">•</span>
              <span>Jake Klein viewed this deal in 2019, but decided not to proceed due to <span className="underline" style={{ color: '#0001EF', textDecorationColor: '#0001EF' }}>
                lack of potential upside
              </span>.</span>
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
      <div className="p-6 space-x-2">
        <h2 className="text-base font-medium text-[#71717A] mb-3 flex justify-center items-center py-4">Asset-Level Data</h2>
        <div className="space-y-2 px-16 pt-2">
          <div className="flex items-center gap-[70px]">
            <AssetItem icon="height.svg" label="Clear Heights" value="36'" />
            <AssetItem icon="person-standing.svg" label="Tenant" value={tenant.name || "N/A"} />
          </div>
          <div className="flex items-center gap-14">
            <AssetItem icon="columnSpacing.svg" label="Column Spacing" value="63' X 54'" />
            <AssetItem icon="seaArea.svg" label="Sq/Ft Area" value="357,151 sqft" />
          </div>
          <div className="flex items-center gap-16">
            <AssetItem icon="parking.svg" label="Parking Spaces" value="393" />
            <AssetItem icon="year-built.svg" label="Year Built" value="2022" />
          </div>
          <div className="flex items-center gap-16">
            <AssetItem icon="doors.svg" label="# of Dock Doors" value="28" />
            <AssetItem icon="occupancy-rate.svg" label="Occupancy Rate" value={`${tenant.occupancyRate || "100"}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AssetItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex gap-1 items-center">
    <div className="w-10 text-gray-500">
      <img src={icon} alt={label} />
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  </div>
);
