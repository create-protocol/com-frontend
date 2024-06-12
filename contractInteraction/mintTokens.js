import {writeContract,readContract} from '@wagmi/core';
import abi from './abi';
import configs from '@/config.json';
import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [ sepolia],
    transports: {
        [sepolia.id]: http(),
    },
})


export const mintTokens = async (wallet, chainId,tokenId) => {
    console.log('data--0', wallet,chainId, tokenId)
    try {
        const n = await readContract(config,{
            address: configs.contractAddress,
            abi: abi,
            chainId:chainId,
            functionName: 'balanceOf',
            args: [wallet],
        })
        return n;
    } catch (error) {
        console.log('contract--error--', error)
        return error
    }


}