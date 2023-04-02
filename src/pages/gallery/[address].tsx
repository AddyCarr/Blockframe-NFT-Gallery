import { GetServerSideProps } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'

import { NFTGallery } from '@/components/NFTGallery/NFTGallery'
import { NFTByAddressResponse } from '@/types'

type AddressProps = NFTByAddressResponse

export default function Address({ result }: AddressProps) {
    return (
        <>
            <Head>
                <title>Encode Bootcamp Final Project</title>
            </Head>
            <main>
                <NFTGallery 
                    data={result || []}
                    isLoading={false}
                />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { address } = context.query
    const result = await fetcher<NFTByAddressResponse>(`/api/nfts?address=${address}`);

    return {
        props: {
            ...result
        },
    }
}

async function fetcher<T>(url: string): Promise<T> {
    const { publicRuntimeConfig } = getConfig();
    const response = await fetch(`${publicRuntimeConfig.BASE_URL}${url}`);
    const result = await response.json() as T;

    return result
}
