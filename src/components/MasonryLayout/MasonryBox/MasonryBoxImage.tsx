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

    function getRandomHexColor() {
        const hexChars = '0123456789ABCDEF';

        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
          hexColor += hexChars[Math.floor(Math.random() * 16)];
        }
        
        return hexColor;
    }

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
        <div className={styles['masonry-image-error']} style={{ backgroundColor: getRandomHexColor() }}>
            <h2>{name}</h2>
        </div>
    )
}
