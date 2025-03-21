'use client';
import newrelicBrowserAgentLoader from "../newrelicBrowserSnippet"

const ClientComponent: React.FC = () => {
  return <script 
          dangerouslySetInnerHTML={{ __html: newrelicBrowserAgentLoader }}
        />
};

export default ClientComponent;