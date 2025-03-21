interface BrowserAgentOptions {
  init: object
  info: object
  loader_config: object
}

let browserAgentLoader: Promise<object>
export default function createNewrelicBrowserAgent(opts: BrowserAgentOptions): Promise<object> {
  if (!browserAgentLoader) {
    browserAgentLoader = import('@newrelic/browser-agent').then(({BrowserAgent}) => {
        return new BrowserAgent(opts)
      })
  }
  return browserAgentLoader;
}
