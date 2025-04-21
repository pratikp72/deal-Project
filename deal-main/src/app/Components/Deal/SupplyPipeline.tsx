
import React from 'react';

interface SupplyData {
  image: string;
  address: string;
  submarket: string;
  deliveryDate: string;
  owner: string;
  sf: string;
}

interface ComparableData {
  image: string;
  address: string;
  submarket: string;
  date: string;
  sf: string;
  owner: string;
  pp: string;
  tenant: string;
}

const SupplyItem = ({ data }: { data: SupplyData }) => (
  <div className="flex space-x-4">
    <img
      src={data.image}
      alt={data.address}
      className="rounded-lg h-36 w-40 object-cover"
    />
    <div className="flex flex-col text-sm">
      <div><span className="font-semibold">Address:</span> {data.address}</div>
      <div><span className="font-semibold">Submarket:</span> {data.submarket}</div>
      <div><span className="font-semibold">Delivery Date:</span> {data.deliveryDate}</div>
      <div><span className="font-semibold">Owner:</span> {data.owner}</div>
      <div><span className="font-semibold">SF:</span> {data.sf}</div>
    </div>
  </div>
);

const ComparableItem = ({ data }: { data: ComparableData }) => (
  <div className="w-1/2 flex">
    <div className="flex space-x-4">
      <img
        src={data.image}
        alt={data.address}
        className="rounded-lg h-36 w-40 object-cover"
      />
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

export default function SupplyPipeline() {
  const supplyData: SupplyData[] = [
    {
      image: '/image (1).png',
      address: '640 Columbia',
      submarket: 'Brooklyn',
      deliveryDate: 'Jun-25',
      owner: 'CBRE',
      sf: '336,350',
    },
    {
      image: '/image (4).png',
      address: 'WB Mason',
      submarket: 'Bronx',
      deliveryDate: 'May-25',
      owner: 'Link Logistics',
      sf: '150,000',
    },
  ];

  const comparableData: ComparableData[][] = [
    [
      {
        image: '/image (2).png',
        address: '1 Debaun Road',
        submarket: 'Millstone, NJ',
        date: 'Jun-24',
        sf: '132,930',
        owner: 'Cabot',
        pp: '$41,903,580',
        tenant: 'Berry Plastics',
      },
      {
        image: '/image (3).png',
        address: 'Baylis 495 Business Park',
        submarket: 'Melville, NY',
        date: 'May-24',
        sf: '103,500',
        owner: 'Bethel Green',
        pp: '$44,000,000',
        tenant: 'Dr. Pepper',
      },
    ],
    [
      {
        image: '/image (5).png',
        address: '39 Edgeboro Road',
        submarket: 'Millstone, NJ',
        date: 'Oct-23',
        sf: '513,240',
        owner: 'Blackstone',
        pp: '$165,776,520',
        tenant: 'FedEx',
      },
      {
        image: '/image (6).png',
        address: 'Terminal Logistics Center',
        submarket: 'Queens, NY',
        date: 'Mar-23',
        sf: '336,000',
        owner: 'Goldman',
        pp: '$136,000,000',
        tenant: 'Do & Co',
      },
    ],
  ];

  return (
    <div className="flex flex-col space-y-6 overflow-hidden">
      
      <div className="flex w-full">
       
        <div className="w-3/10 border-r border-gray-200 pr-4">
       
          <div className="font-bold text-xl mb-6">Supply Pipeline</div>
          
         
          <div className="flex flex-col space-y-6">
            {supplyData.map((supply, index) => (
              <SupplyItem key={index} data={supply} />
            ))}
          </div>
        </div>
      
        <div className="w-7/10 pl-4">
     
          <div className="font-bold text-xl mb-6">Sale Comparables</div>
          
  
          <div className="flex flex-col space-y-6">
            {supplyData.map((_, index) => (
              <div key={index} className="flex w-full">
                {comparableData[index].map((comp, idx) => (
                  <ComparableItem key={idx} data={comp} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}