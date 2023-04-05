import React from 'react'

import { MasonryBoxImage } from './MasonryBoxImage'
import styles from './MasonryBox.module.css'

export type MasonryBoxProps = {
    src: string
    name: string
    description: string
}

export const MasonryBox: React.FC<MasonryBoxProps> = ({
    src,
    name,
    description
}) => {

    return (
        <div className={styles['my-masonry']}>
            <MasonryBoxImage src={src} name={name} />
            <div className={`${styles['my-masnry-description']} flex`}>
                <div
                    className={`${styles['my-masnry-user-box']} flex align-items-center`}
                >
                    <div
                        className={`${styles['my-masnry-user-prof-desc']} flex flex-column`}
                    >
                        <h1>{name}</h1>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
