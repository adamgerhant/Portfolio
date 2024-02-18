import Segment from "./Segment";

import { useState } from "react";
function App() {
  /*
  Web developer interested in backend system architecture, databases, and API's. Currently interested in the low-level design of server and database systems
  description: A list of full stack web applications.
  project1
  name: Print Submit
  url: https://www.printsubmit.com
  about: When starting a 3d printing service at my local library, I realized there were no online tools specifically built to collect 3D print responses. This app provides a variety of features, such as automated emails, a fully customizeable submission form, server-side submission validation, 3d print previews, analytics, and more.
  usage: Currently used by the library where I started the 3D printing service.
  Stack: Firebase, Cloud Functions, Stripe, reCAPTCHA, OAuth, Gmail API, React, SASS
  https://adamgerhantportfolioimages.s3.amazonaws.com/analytics.png
  https://adamgerhantportfolioimages.s3.amazonaws.com/emails.png
  https://adamgerhantportfolioimages.s3.amazonaws.com/submissionFocus.png
  https://adamgerhantportfolioimages.s3.amazonaws.com/submissionForm.png
  */
  const [tab, setTab] = useState("webapps")
  return (
    <div className="bg-zinc-900 min-h-[100vh] w-full flex flex-col">
        <Segment preset={"about"}/>
      <div className="w-full px-20 pt-4 flex justify-center ">
        <div className="text-xl text-white">
          Generate a preset query for a category
        </div>
      </div>
      <div className="w-full px-20 pt-5 flex justify-center">
        <div onClick={()=>setTab("webapps")} className={tab=="webapps"?"rounded-full px-3 py-1 text-xl bg-white text-black font-semibold cursor-pointer mx-3 border border-white":"border border-white mx-3 rounded-full px-3 py-1 text-xl text-white font-semibold cursor-pointer"}>
          Web Development
        </div>
        <div onClick={()=>setTab("jobs")} className={tab=="jobs"?"rounded-full px-3 py-1 text-xl bg-white text-black font-semibold cursor-pointer mx-3 border border-white":"border border-white mx-3 rounded-full px-3 py-1 text-xl text-white font-semibold cursor-pointer"}>
          Experience
        </div> 
        <div onClick={()=>setTab("articles")} className={tab=="articles"?"rounded-full px-3 py-1 text-xl bg-white text-black font-semibold cursor-pointer mx-3 border border-white":"border border-white mx-3 rounded-full px-3 py-1 text-xl text-white font-semibold cursor-pointer"}>
          Articles
        </div>
        <div onClick={()=>setTab("c++")} className={tab=="c++"?"rounded-full px-3 py-1 text-xl bg-white text-black font-semibold cursor-pointer mx-3 border border-white":"border border-white mx-3 rounded-full px-3 py-1 text-xl text-white font-semibold cursor-pointer"}>
          C++
        </div>
        <div onClick={()=>setTab("3d")} className={tab=="3d"?"rounded-full px-3 py-1 text-xl bg-white text-black font-semibold cursor-pointer mx-3 border border-white":"border border-white mx-3 rounded-full px-3 py-1 text-xl text-white font-semibold cursor-pointer"}>
          3D Printing
        </div>
        
      </div>
        <Segment preset={tab}/>
    </div>
  );
}

export default App;
