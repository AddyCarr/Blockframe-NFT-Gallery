import React from 'react'
import Masonry from 'react-masonry-css'
import { Loader } from '../Loader/Loader'

import { MasonryBox } from './MasonryBox/MasonryBox'
import styles from './MasonryLayout.module.css'

type MasonryLayoutProps = {
    images: {
        id: string
        src: string
        name: string
        description: string
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
        return (
            <div className={styles.loaderWrapper}>
                <div className={styles.loaderInnerWrapper}>
                    <Loader theme='light' />
                </div>
            </div>
        )
    }

    if (images.length === 0) {
        return <h2 className={styles.emptyHeading}>Nothing to display.</h2>
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
                    name={item.name}
                    description={item.description}
                />
            ))}
        </Masonry>
    )
}
