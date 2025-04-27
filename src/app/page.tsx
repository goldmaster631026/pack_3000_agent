// export default function Home() {
//   return (
//     <div>
      
//         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="country.png" alt="map" />
//         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="pack3000map.png" alt="map" />
//         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="magna.png" alt="map" />
//         <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="dashboardmachine.png" alt="map" />
//     </div>
//   )
// }

"use client";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      {/* Dapta */}
      <Script
        src="https://widget.dapta.ai/dapta_agent_min.js?agentId=aae76279-aed5-4b38-b978-931c0326dde0"
        strategy="afterInteractive"
      />

      {/* Play AI */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@latest"
        strategy="afterInteractive"
      />
      <Script strategy="lazyOnload">
        {`
          addEventListener("load", () => {
            PlayAI.open('g2h8hTPr8-pVeFlOrguOx');
          });
        `}
      </Script> */}

  

      <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="country.png" alt="map" />
      <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="pack3000map.png" alt="map" />
      <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="magna.png" alt="map" />
      <img className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="dashboardmachine.png" alt="map" />
    </div>
  );
}
