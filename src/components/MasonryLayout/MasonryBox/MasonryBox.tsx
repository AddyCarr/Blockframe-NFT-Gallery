import React from 'react'

import { MasonryBoxImage } from './MasonryBoxImage'
import styles from './MasonryBox.module.css'

export type MasonryBoxProps = {
    src: string
    name: string
    user: {
        profession: string
        name: string
        job: string
    }
}

export const MasonryBox: React.FC<MasonryBoxProps> = ({
    src,
    name,
    user: { profession, name: userName, job },
}) => {
    return (
        <div className={styles['my-masonry']}>
            <MasonryBoxImage src={src} name={name} />
            <div className={`${styles['my-masnry-description']} flex`}>
                <div
                    className={`${styles['my-masnry-user-box']} flex align-items-center`}
                >
                    <div className={styles['my-masnry-user-prof']}>
                        <img src={profession} alt='' />
                    </div>
                    <div
                        className={`${styles['my-masnry-user-prof-desc']} flex flex-column`}
                    >
                        <h1>{userName}</h1>
                        <h3>{job}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
