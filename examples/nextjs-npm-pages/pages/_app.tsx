import "@/styles/globals.css";
import type { AppProps } from "next/app";
import createNewRelicBrowserAgent from "@/lib/newRelicBrowserAgent";

export default function App({ Component, pageProps }: AppProps) {
  createNewRelicBrowserAgent({
    init: {
      distributed_tracing: {enabled: true},
      privacy: {cookies_enabled: true},
      ajax: {deny_list: ["bam.nr-data.net"]}
    },
    info: {
      beacon: "bam.nr-data.net",
      errorBeacon: "bam.nr-data.net",
      licenseKey: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_LICENSE_KEY,
      applicationID: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_APPLICATION_ID,
      sa: 1
    },
    loader_config: {
      accountID: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_ACCOUNT_ID,
      trustKey: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_ACCOUNT_ID,
      agentID: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_APPLICATION_ID,
      licenseKey: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_LICENSE_KEY,
      applicationID: process.env.NEXT_PUBLIC_NEW_RELIC_BROWSER_AGENT_APPLICATION_ID
    }
  })

  return <Component {...pageProps} />;
}
