// "use client";
// import { useEffect } from "react";

// export default function BrowserAgentInitializer() {
//   console.log("BrowserAgentInitializer component rendered");

//   useEffect(() => {
//     console.log("this is running...")
//     // if (typeof window !== 'undefined') {
//       console.log("Initializing BrowserAgent");
//       (async () => {
//         // Refer to your New Relic browser entity UI's app setting for the following configuration values in the code snippet box.
//         const options = {
//           init: {distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}, // copy & replace this with your NREUM.init
//           info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRBR-d1d4c5cde2766734486",applicationID:"601468270",sa:1}, // NREUM.info
//           loader_config: {accountID:"1672072",trustKey:"1672072",agentID:"601468270",licenseKey:"NRBR-d1d4c5cde2766734486",applicationID:"601468270"} // NREUM.loader_config
//         }

//         const { BrowserAgent } = await import("@newrelic/browser-agent")
//         console.log(BrowserAgent)
//         new BrowserAgent(options)
//       })()
//     // }
//   }, []);
//   return (<p>BrowserAgentInitializer component returned</p>);
// };

export function register() {
	// if (typeof window !== 'undefined') {
	// 	console.log("Initializing BrowserAgent");
	// 	(async () => {
	// 		// Refer to your New Relic browser entity UI's app setting for the following configuration values in the code snippet box.
	// 		const options = {
	// 			init: {distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}, // copy & replace this with your NREUM.init
	// 			info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRBR-d1d4c5cde2766734486",applicationID:"601468270",sa:1}, // NREUM.info
	// 			loader_config: {accountID:"1672072",trustKey:"1672072",agentID:"601468270",licenseKey:"NRBR-d1d4c5cde2766734486",applicationID:"601468270"} // NREUM.loader_config
	// 		}

	// 		const { BrowserAgent } = await import("@newrelic/browser-agent")
	// 		console.log(BrowserAgent)
	// 		new BrowserAgent(options)
	// 	})()
	// }
  // registerOTel('next-app')
}