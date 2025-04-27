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
import Image from "next/image";
// import Head from 'next/head';
import PlayAiAgent from "@/components/PlayAiAgent";


export default function Home() {
  // const [userInput, setUserInput] = useState('');
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.innerHTML = `
  //     addEventListener("load", () => {
  //       PlayAI.open('g2h8hTPr8-pVeFlOrguOx');
  //     });
  //   `;
  //   document.body.appendChild(script);
  // }, []);
  
  // const handleUserInput = (input: SetStateAction<string>) => {
  //   setUserInput(input);
  //   // Call the AI Agent's API to process the user input
  //   window.PlayAI.send(input);
  // };
  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@ht"
        />
      </Head> */}
      
      {/* Dapta */}
      <Script
        src="https://widget.dapta.ai/dapta_agent_min.js?agentId=aae76279-aed5-4b38-b978-931c0326dde0"
        strategy="afterInteractive"
      />

      {/* Play AI */}
    
      <PlayAiAgent />

  

      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="country.png" alt="map" />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="pack3000map.png" alt="map" />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-6" src="magna.png" alt="map" />
      <Image className="h-auto max-w-full rounded-lg shadow-lg mx-auto my-4" src="dashboardmachine.png" alt="map" />
    </div>
  );
}
