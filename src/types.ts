export type Metadata = {
    animation_url: string | null
    description: string | null
    external_link: string | null
    image: string | null
    name: string | null
}

type RawNft = {
    amount?: string
    block_number: string
    block_number_minted: string
    contract_type: string
    last_metadata_sync: string
    last_token_uri_sync: string
    metadata?: string
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

export type NftsMetadata = {
    cursor: string
    page: number
    page_size: number
}

export type RawNftsResponse = NftsMetadata & {
    result: RawNft[]
}
