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
            setTimeout(() => {
                scrollIntoView('masonry-title')
            }, 100)
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

        // TODO - Remove or change into something more relevant for our nft's
        // This exists purely for fulfilling the masonry box component props
        user: {
            profession: string
            name: string
            job: string
        }
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
            user: {
                profession:
                    'https://i.seadn.io/gcs/files/6951021805d1015b6e95937dc084ec80.png?w=500&auto=format',
                name: 'Users Name',
                job: 'Users Job',
            },
        }
    })

    return {
        ...rawNftsResponse,
        result: mappedResult,
    }
}
