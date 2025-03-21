import { Html, Head, Main, NextScript } from "next/document";
import newrelicBrowserAgentLoader from "@/newrelicBrowserSnippet"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <p>This is being rendered</p>
        <script 
          dangerouslySetInnerHTML={{ __html: newrelicBrowserAgentLoader }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

