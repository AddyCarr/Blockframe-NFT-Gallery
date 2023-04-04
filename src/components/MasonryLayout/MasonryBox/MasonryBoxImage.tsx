import { useState } from 'react'

import styles from './MasonryBox.module.css'

type MasonryBoxImageProps = {
    src: string | null
    name: string
}

export const MasonryBoxImage: React.FC<MasonryBoxImageProps> = ({
    src,
    name,
}) => {
    const [hasError, setHasError] = useState(false)

    if (src && !hasError) {
        return (
            <img
                className={styles['masonry-image']}
                onError={() => setHasError(true)}
                src={src}
                alt={name}
            />
        )
    }

    return (
        <div className={styles['masonry-image-error']}>
            <h2>{name}</h2>
        </div>
    )
}
