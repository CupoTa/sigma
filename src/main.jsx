import { createRoot } from 'react-dom/client'
import { Buffer } from 'buffer';
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './wagmi';
import './i18n';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css'
import App from './App.jsx'

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
