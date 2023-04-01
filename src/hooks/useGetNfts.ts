import { useState } from 'react'

import { NFT, NFTByAddressResponse } from '@/types'

export const useGetNfts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<NFT[]>([])

    async function handleGetByAddress(address: string) {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/nfts?address=${address}`);
            const result = await response.json() as NFTByAddressResponse;
            setData(result.result);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    return [
        isLoading,
        data,
        handleGetByAddress,
    ] as const
}