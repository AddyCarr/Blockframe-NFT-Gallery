import { useState } from 'react'

import { Metadata, NftsMetadata, RawNftsResponse } from '@/types'
import { scrollIntoView } from '@/helpers/scrollIntoView'

type Data = MappedNfts &
    NftsMetadata & {
        address: string
    }

export const useGetNfts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Data | null>(null)

    async function handleGetByAddress(address: string) {
        try {
            setIsLoading(true)
            const response = await fetch(`/api/nfts?address=${address}`)
            const result = (await response.json()) as RawNftsResponse
            setData({
                ...result,
                ...mapRawNfts(result),
                address,
            })
            setIsLoading(false)
            scrollIntoView('masonry-title')
        } catch (error) {
            setIsLoading(false)
        }
    }

    return [isLoading, data, handleGetByAddress] as const
}

type MappedNfts = {
    result: {
        id: string
        name: string
        src: string
        description: string
    }[]
}

function mapRawNfts(rawNftsResponse: RawNftsResponse): MappedNfts {
    const mappedResult = rawNftsResponse.result.map((nft) => {
        const parsedMetadata = nft?.metadata
            ? (JSON.parse(nft.metadata) as Metadata)
            : null
        return {
            id: nft.token_id,
            name: nft.name,
            src: parsedMetadata?.image || '',
            description: parsedMetadata?.description || ''
        }
    })

    return {
        ...rawNftsResponse,
        result: mappedResult,
    }
}
