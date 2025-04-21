import Head from "next/head";


interface NavbarProps {
  pageType?: string;
  navLinks: string[];
}

export default function Navbar({ pageType,navLinks }: NavbarProps) {


    return(<>
    
    <div className=" bg-white px-2 py-4">
    {(pageType === "newmemo" || pageType === "deal") && (
          <img src="arrow-left.png" className="px-4" alt="Back Arrow" />
        )}
      <Head>
        <title>Upload New Deal</title>
      </Head>
      
      <div className="flex items-center px-6 h-16 ">
        
        <div className="flex items-center space-x-6">
        

{navLinks.map((link, index) => (
              <span key={index} className={`text-sm ${index === 0 ? "font-medium text-[#09090B]" : "text-gray-500"}`}>
                {link}
              </span>
            ))}
        </div>
        
        <div className="flex items-center gap-4 justify-center flex-grow max-w-[420px] mx-auto px-4">
  <img src="Avatar.png" alt="Avatar" className="h-8 w-8 rounded-full object-cover" />
  
  <input
    type="text"
    placeholder="Ask me anything!"
    className="flex-grow min-w-[200px] pl-3 pr-4 py-2 border border-gray-300 rounded-full text-sm rounded-bl-none"
  />
</div>

        
        <div className="flex">
         <img src="24a55148-6c38-40de-a51e-9fcf59c0e5e8.svg" alt="Starboard Logo" className="" />
        </div>
      </div>
      </div>
    
    </>)
}