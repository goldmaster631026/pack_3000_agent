// types/playai.d.ts
interface Window {
    PlayAI: {
      send(input: React.SetStateAction<string>): unknown;
      open: (agentId: string) => void;
      // Add other methods/properties if needed
    };
  }
  