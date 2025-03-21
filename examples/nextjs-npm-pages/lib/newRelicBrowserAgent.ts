import type * as BrowserAgentTypes from '@newrelic/browser-agent';
import { useEffect } from 'react';

export interface BrowserAgentOptions {
  init: unknown
  info: unknown
  loader_config: unknown
}

let browserAgentLoader: Promise<BrowserAgentTypes.BrowserAgent>
export default function createNewRelicBrowserAgent(opts: BrowserAgentOptions): Promise<BrowserAgentTypes.BrowserAgent> {
  useEffect(() => {
    if (!browserAgentLoader) {
      browserAgentLoader = import('@newrelic/browser-agent')
        .then(({BrowserAgent}) => {
          return new BrowserAgent(opts)
        })
    }
  })

  return browserAgentLoader
}
