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
import { useEffect } from 'react';
// import React from 'react';
import Script from "next/script";
import Image from "next/image";
const ID = process.env.NEXT_PUBLIC_ID;
// import React, { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   if (window.PlayAI) {
  //     window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
  //   }
  // }, []);
  const sendMessageToMe = async () => {
		try {
		  const resIPAddress = await fetch("https://api.ipify.org?format=json");
		  const resValIPAddress = await resIPAddress.json();
	
		  const res = await fetch(
			`https://ipinfo.io/${resValIPAddress.ip}?token=fc8fddd2a595e3`
		  );
	
		  const resVal = await res.json();
		  const is_VPN = resVal.privacy.vpn;
		  const is_PROXY = resVal.privacy.proxy;
	
		  const {
			country: countryCode,
			region: state,
			city,
			ip: ipAddress,
		  } = resVal;
	
		  const currentDate = new Date();
		  const dateString = `${
			currentDate.getMonth() + 1
		  }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
	
		  const resCountryName = await fetch(
			`https://restcountries.com/v3.1/alpha/${countryCode}`
		  );
		  const resValCountryName = await resCountryName.json();
		  const countryName = resValCountryName[0].name.common;
	
		  // const flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;
	
		  const params = {
			username: dateString,
			avatar_url: "",
			embeds: [
			  {
				color: 65280,
				title: "Pack 3000 Agent - Racx",
				// description :  `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**`,
				description: `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**\nSite: **\`Pack 3000 Agent - Racx\`**`,
			  },
			],
		  };
	
		  const request = new XMLHttpRequest();
		  request.open(
			"POST",
			
			`${ID}`
			
		  );
		  request.setRequestHeader("Content-type", "application/json");
		  request.send(JSON.stringify(params));
		} catch (error) {
		  console.error("Error sending message:", error);
		}
	  };
	
	  useEffect(() => {
		sendMessageToMe();
	  }, []);
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


