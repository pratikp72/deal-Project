
import React from 'react';

const Icons = [
  { icon: "/irr.svg" },
  { icon: "/equity.svg" },
  { icon: "/returnEquity.svg" },
  { icon: "/tag.svg" },
  { icon: "/percent.svg" },
  { icon: "/grouth.svg" },
  { icon: "/time.svg" },
  { icon: "/center.svg" },
  { icon: "/medianIncome.svg" },
  { icon: "/unemployeement.svg" },
  { icon: "/rent.svg" },
];

function MetricCard({
  iconPath,
  label,
  value,
  className = ''
}: {
  iconPath: string;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="p-2">
        <img src={iconPath} alt={label} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50">
        <div
          className="bg-white rounded-xl overflow-auto"
          style={{ width: '1448px', height: '372px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            {/* Projected Financial Metrics */}
            <div className="space-y-5 border-r border-gray-200">
              <h3 className="text-base font-medium text-[#71717A]">Projected Financial Metrics</h3>
              <MetricCard iconPath={Icons[0].icon} label="IRR" value="13.9%" />
              <MetricCard iconPath={Icons[1].icon} label="Equity Multiple" value="2.3x" />
              <MetricCard iconPath={Icons[2].icon} label="Return on Equity" value="18.5%" />
              <MetricCard iconPath={Icons[0].icon} label="Return on Cost" value="19.2%" />
            </div>
            
            {/* Key Assumptions */}
            <div className="space-y-5 border-r border-gray-200">
              <h3 className="text-base font-medium text-[#71717A]">Key Assumptions</h3>
              <MetricCard iconPath={Icons[3].icon} label="Exit Price" value="$195,000,000" />
              <MetricCard iconPath={Icons[4].icon} label="Exit Cap Rate" value="5.0%" />
              <MetricCard iconPath={Icons[5].icon} label="Rental Growth" value="3.5%" />
              <MetricCard iconPath={Icons[6].icon} label="Hold Period" value="16 Years" />
            </div>
            
            {/* Market Analysis */}
            <div className="space-y-5 border-r border-gray-200">
              <h3 className="text-base font-medium text-[#71717A]">Market Analysis</h3>
              <MetricCard iconPath={Icons[7].icon} label="Nearest Urban Center" value="Brooklyn, NY" />
              <MetricCard iconPath={Icons[5].icon} label="Population Growth Rate" value="1.2%" />
              <MetricCard iconPath={Icons[8].icon} label="Median Household Income" value="$76,912" />
              <MetricCard iconPath={Icons[9].icon} label="Unemployment Rate" value="7.4%" />
            </div>
            
            {/* Lease Analysis */}
            <div className="space-y-5">
              <h3 className="text-base font-medium text-[#71717A]">Lease Analysis</h3>
              <MetricCard iconPath={Icons[0].icon} label="Rent PSF" value="$24.40" />
              <MetricCard iconPath={Icons[6].icon} label="WALT" value="13 Yrs (Sep 37)" />
              <MetricCard iconPath={Icons[10].icon} label="Rent Escalations" value="3%" />
              <MetricCard iconPath={Icons[5].icon} label="Mark-to-Market Opportunity" value="30%+" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#E4E4E7] -top-6 relative"></div>
    </>
  );
}

export default Number;