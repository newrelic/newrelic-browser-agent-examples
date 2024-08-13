'use client';
import React, { use, useEffect } from 'react';
import createNewrelicBrowserAgent from '@/lib/newrelic';

const ClientComponent: React.FC = () => {
	const configs = {
		init: {
			distributed_tracing: { enabled: true },
			privacy: { cookies_enabled: true },
			ajax: { deny_list: ["bam.nr-data.net"] }
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
	};
	useEffect(() => {
		createNewrelicBrowserAgent(configs)
	})

  return <div>Client-side component loaded</div>;
};

export default ClientComponent;