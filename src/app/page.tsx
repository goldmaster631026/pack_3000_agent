// // export default function Home() {
// //   return (
// //     <div>
      
// //         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="country.png" alt="map" />
// //         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="pack3000map.png" alt="map" />
// //         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="magna.png" alt="map" />
// //         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="dashboardmachine.png" alt="map" />
// //     </div>
// //   )
// // }

// "use client";
// import React from 'react';
// // import CallButton from '@/components/CallButton';

// import Script from "next/script";
// import Image from "next/image";
// import Head from 'next/head';
// // import Head from 'next/head';
// // import PlayAiAgent from "@/components/PlayAiAgent";
// // import dynamic from "next/dynamic";

// // const PlayAiAgent = dynamic(() => import("@/components/PlayAiAgent"), {
// //   ssr: false,
// // });

// export default function Home() {

//   return (
//     <div>
     
      
//       {/* Dapta */}
//       <Script
//         src="https://widget.dapta.ai/dapta_agent_min.js?agentId=aae76279-aed5-4b38-b978-931c0326dde0"
//         strategy="afterInteractive"
//       />

     
      

      
//       <Image className="h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto mt-44" src="/pack-slogan.png" alt="map" width={1600} height={304} />
//       <Image className="h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/country.png" alt="map" width={1000} height={150} />
//       <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/pack3000map.png" alt="map" width={1600} height={850} />
//       <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="/magna.png" alt="map" width={300} height={70} />
//       <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/dashboardmachine.png" alt="map" width={1600} height={330} />
//       <Image className="h-auto max-w-full rounded-lg mx-auto mt-8 mb-16" src="/bottom-slogan.png" alt="map" width={1600} height={727} />
//     </div>
//   );
// }


"use client";
// import React from 'react';
import Script from "next/script";
import Image from "next/image";

// import React, { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   if (window.PlayAI) {
  //     window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
  //   }
  // }, []);
  return (
    <div>

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@<correct-version>"
        strategy="afterInteractive"
      /> */}

      {/* Dapta */}
      <Script
        src="https://widget.dapta.ai/dapta_agent_min.js?agentId=aae76279-aed5-4b38-b978-931c0326dde0"
        strategy="afterInteractive"
      />

      <Image className="h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto mt-44" src="/pack-slogan.png" alt="map" width={1600} height={304} />
      <Image className="h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/country.png" alt="map" width={1000} height={150} />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/pack3000map.png" alt="map" width={1600} height={850} />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="/magna.png" alt="map" width={300} height={68} />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="/dashboardmachine.png" alt="map" width={1600} height={330} />
      <Image className="h-auto max-w-full rounded-lg mx-auto mt-8 mb-16" src="/bottom-slogan.png" alt="map" width={1600} height={727} />
    </div>
  );
}


