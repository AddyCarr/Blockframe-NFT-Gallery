import type { NextApiRequest, NextApiResponse } from 'next'
import Moralis from 'moralis'

const MORALIS_API_KEY = process.env.MORALIS_API_KEY

type Query = {
    address: string
}

export default async function nfts(req: NextApiRequest, res: NextApiResponse) {
    const { address } = req.query as Query;

    if (!Moralis.Core.isStarted) {
        await Moralis.start({
            apiKey: MORALIS_API_KEY
        });
    }

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "0x1",
        format: "decimal",
        tokenAddresses: [],
        mediaItems: false,
        address,
    });

    res.status(200).json(response.raw)
}
