import { useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { useGetNfts } from '@/hooks/useGetNfts'
import { Header } from '@/components/Header/Header'
import { MasonryLayout } from '@/components/MasonryLayout/MasonryLayout'
import { useDropdown } from '../hooks/useDropdown'
import { ContainerCard } from '@/components/ContainerCard/ContainerCard'
import { Dropdown } from '@/components/Elements/Dropdown/Dropdown'
import { copyToClipboard } from '@/helpers/copyToClipboard'
import styles from '../styles/App.module.css'

type HomeProps = {
    address: string
}

export default function Home(props: HomeProps) {
    const [isLoading, data, onGetByAddress] = useGetNfts()
    const [dropdownItems, selectedItem, onUpdateSelection] = useDropdown()
    const router = useRouter()

    useEffect(() => {
        if (props.address) {
            onGetByAddress(props.address)
        }
    }, [])

    function handleButtonClick() {
        const fullLink = `${window.location.origin}${router.asPath}`
        copyToClipboard(fullLink)
    }

    return (
        <>
            <Head>
                <title>Blockframe - View and Mint NFTs</title>
                <meta
                    name='Blockframe - One stop shop to NFT management'
                    content='View and Mint your very own NFTs in one place!'
                />
            </Head>

            <main>
                <Header onSearch={onGetByAddress} isSearchLoading={isLoading} />
                <div
                    className='flex justify-content-center'
                    style={{ marginTop: '50px', padding: '50px' }}
                >
                    <ContainerCard>
                        <div
                            className={`${styles['gallery-setting']} flex justify-content-between align-items-center`}
                        >
                            <div className="flex align-items-center">
                                <h1 id='masonry-title'>All images</h1>
                                {data && <div style={{ marginLeft: 10 }}>
                                    <button onClick={handleButtonClick}>Share Link</button>
                                </div>}
                            </div>
                            <Dropdown
                                selectedItem={selectedItem}
                                onSelect={onUpdateSelection}
                                items={dropdownItems}
                            />
                        </div>
                        {data && (
                            <MasonryLayout
                                isLoading={isLoading}
                                images={data.result}
                                filterBy={selectedItem.id}
                            />
                        )}
                    </ContainerCard>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { address } = context.query
    return {
        props: {
            address: address || '',
        },
    }
}
