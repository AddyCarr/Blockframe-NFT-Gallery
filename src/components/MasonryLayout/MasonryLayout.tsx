import React from 'react'
import Masonry from 'react-masonry-css'

import { MasonryBox } from './MasonryBox/MasonryBox'
import styles from './MasonryLayout.module.css'

type MasonryLayoutProps = {
    images: {
        id: string
        src: string
        name: string
        user: {
            profession: string
            name: string
            job: string
        }
    }[]
    isLoading: boolean
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({
    images,
    isLoading,
}) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }

    if (isLoading) {
        return <h2 style={{ color: '#fff' }}>Loading NFT's ...</h2>
    }

    if (images.length === 0) {
        return <h2 style={{ color: '#fff' }}>Nothing to display.</h2>
    }

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles['my-masonry-grid']}
            columnClassName={styles['my-masonry-grid_column']}
        >
            {images.map((item) => (
                <MasonryBox
                    key={item.id}
                    src={item.src}
                    user={item.user}
                    name={item.name}
                />
            ))}
        </Masonry>
    )
}
