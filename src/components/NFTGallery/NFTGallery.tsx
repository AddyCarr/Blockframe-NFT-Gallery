import { NFT } from '@/types'
// import styles from './NFTGallery.module.css'
import { useState } from 'react'
import ContainerCard from '../ContainerCard/ContainerCard'
import Dropdown from '../Elements/Dropdown/Dropdown'
import MasonryLayout from '../MasonryLayout/MasonryLayout'

import images from "../../Jsons/Images.json";
import styles from "../../styles/App.module.css";

type NFTGalleryProps = {
    isLoading: boolean
    data: NFT[]
}



export const NFTGallery: React.FC<NFTGalleryProps> = ({ isLoading, data }) => {

    const [categoryImage, setCategoryImage] = useState(images.categories.all);
    const takeDdTitle = (ddTitle: any) => {
        setCategoryImage(() => {
          let categoryChoose = Object.keys(images.categories).filter((item) => {
            const titleSplited = ddTitle.toLowerCase().split(" ")[0];
            return item.toLowerCase().includes(titleSplited);
          });
          return [...images.categories[categoryChoose]];
        });
      };

    // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true,
    },
    {
      id: 2,
      title: "Sort: Newest",
      active: false,
    },
    {
      id: 3,
      title: "Sort: Price",
      active: false,
    },
    {
      id: 4,
      title: "Sort: Popularity",
      active: false,
    },
    {
      id: 5,
      title: "Sort: Collection",
      active: false,
    },
  ];




    if (isLoading) {
        return <div>Loading...</div>
    }

    if (data.length === 0) {
        return (
            <div>No NFT's to display</div>
        )
    }

    return (

    //     <ContainerCard>
    //     <div
    //       className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
    //     >
    //       <h1>All images</h1>
    //       <Dropdown
    //         title="All Images"
    //         items={ddItems}
    //         liftingDdTextUp={takeDdTitle}
    //       />
    //     </div>
    //     <MasonryLayout images={categoryImage} />
    //   </ContainerCard>
      
        <div className={styles.wrapper}>
            {data.map(nft => (
                <div key={nft.metadata}>
                    {nft.name}
                </div>
            ))}
        </div>
    )
}