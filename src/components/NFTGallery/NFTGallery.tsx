import { NFT } from '@/types'
import styles from './NFTGallery.module.css'

type NFTGalleryProps = {
    isLoading: boolean
    data: NFT[]
}

export const NFTGallery: React.FC<NFTGalleryProps> = ({ isLoading, data }) => {

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (data.length === 0) {
        return (
            <div>No NFT's to display</div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {data.map(nft => (
                <div key={nft.metadata}>
                    {nft.name}
                </div>
            ))}
        </div>
    )
}