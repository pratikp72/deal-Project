

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {


    return(<>
    
    <div className="flex justify-between items-center mb-12 border-b-1 border-b-[#E4E4E7] pb-4">
          <h1 className="text-2xl font-bold text-[#09090B]">{title}</h1>
          
          <div className="relative ">
            <div className="text-base  font-medium text-[#09090B] absolute -top-5 left-3">
              Underwriting Excel Model
            </div>
            <div className="flex items-center justify-between bg-[#F4F4F5CC] border border-gray-200 rounded-sm px-4 py-2 my-2 w-64">
              <span className="text-sm">Industrial.Template.v2.4.xlsx</span>
              <span className="pr-6"> <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg></span>
             
            </div>
          </div>
          
        </div>
    </>)
}