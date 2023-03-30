export type NFT = {
    amount: string
    block_number: string
    block_number_minted: string
    contract_type: string
    last_metadata_sync: Date
    last_token_uri_sync: Date
    metadata: string
    minter_address: string
    name: string
    owner_of: string
    possible_spam: boolean
    symbol: string
    token_address: string
    token_hash: string
    token_id: string
    token_uri: string
}

export type NFTResponseMetaData = {
    cursor: string
    page: number
    page_size: number
}

export type NFTByAddressResponse = NFTResponseMetaData & {
    result: NFT[]
}