import Header1 from "../Header1";
import ImageComponent from "./ImageComponent";
import ImageSummary from "./ImageSummary";
import Navbar from "../Navbar/Navbar";
import Number from "./Number";
import Header from "../ReauseComp/Header";
import SupplyPipeline from "./SupplyPipeline";

export default function Deal(){



    return(<>
    
       <div className="min-h-screen bg-white ">
       {/* <Header1/> */}
       <Navbar  navLinks={["Deal Overview","Workshop", "Pipeline", "Settings"]} pageType="deal" />

       <div className="px-8 py-8">
    <Header title="Deal Overview"/>
    <ImageComponent/>
    <ImageSummary/>
    <Number/>
    <SupplyPipeline/>
    </div>
        </div>
    </>)
}