import React from 'react'

import { ContainerCard } from '../ContainerCard/ContainerCard'
import { BrickLayout } from '../BrickLayout/BrickLayout'
import { HeaderBoxes } from './HeaderBoxes/HeaderBoxes'
import { Search } from '../Search/Search'
import JsonHeader from '../../Jsons/HeaderBoxes.json'
import styles from './Header.module.css'

type HeaderProps = {
    onSearch: (address: string) => void
    isSearchLoading: boolean
}

export const Header: React.FC<HeaderProps> = ({
    onSearch,
    isSearchLoading,
}) => {
    return (
        <header className={`${styles.header} flex justify-content-center`}>
            <ContainerCard className='flex flex-column'>
                <div className={styles['blur-circle-shape']}></div>

                <BrickLayout />

                <div
                    className={`${styles['headings-header']} flex justify-content-center flex-column `}
                >
                    <h2 className={styles['heading-header-title']}>
                        Generate your shareable NFT Gallery
                    </h2>
                    <h1 className={styles['heading-header-third-title']}>
                        Blockframe. <br />
                    </h1>
                    <h1 className={styles['heading-header-second-title']}>
                        Your NFT's to the <span>world</span>.
                    </h1>

                    <Search
                        onSearch={onSearch}
                        isSearchLoading={isSearchLoading}
                    />

                    <HeaderBoxes titles_numbers={JsonHeader.informations} />
                </div>
            </ContainerCard>
        </header>
    )
}
