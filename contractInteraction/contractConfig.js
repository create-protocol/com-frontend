import {http, createConfig} from 'wagmi'
import {sepolia} from 'wagmi/chains'
import {injected} from "wagmi/connectors";

export const contractConfig = createConfig({
    chains: [sepolia],
    transports: {
        [sepolia.id]: http(),
    },
    ssr: true, // If your dApp uses server side rendering (SSR)
    connectors: [injected()]
})

