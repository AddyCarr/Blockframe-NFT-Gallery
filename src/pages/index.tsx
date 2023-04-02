import Head from 'next/head'

import { useGetNfts } from '@/hooks/useGetNfts'
import { Search } from '@/components/Search/Search'
import { NFTGallery } from '@/components/NFTGallery/NFTGallery'
import Header from '@/components/Header/Header';
import MasonryLayout from '@/components/MasonryLayout/MasonryLayout';
import { useState } from 'react';

import images from "../Jsons/Images.json";
import ContainerCard from '@/components/ContainerCard/ContainerCard';
import styles from "../styles/App.module.css";
import Dropdown from '@/components/Elements/Dropdown/Dropdown';



export default function Home() {
    const [
        isLoading,
        data,
        onGetByAddress,
    ] = useGetNfts();

//     const [categoryImage, setCategoryImage] = useState(images.categories.all);
//     const takeDdTitle = (ddTitle: any) => {
//         setCategoryImage(() => {
//           let categoryChoose = Object.keys(images.categories).filter((item) => {
//             const titleSplited = ddTitle.toLowerCase().split(" ")[0];
//             return item.toLowerCase().includes(titleSplited);
//           });
//           return [...images.categories[categoryChoose]];
//         });
//       };

//     // dropdown items
//   const ddItems = [
//     {
//       id: 1,
//       title: "All Images",
//       active: true,
//     },
//     {
//       id: 2,
//       title: "Sort: Newest",
//       active: false,
//     },
//     {
//       id: 3,
//       title: "Sort: Price",
//       active: false,
//     },
//     {
//       id: 4,
//       title: "Sort: Popularity",
//       active: false,
//     },
//     {
//       id: 5,
//       title: "Sort: Collection",
//       active: false,
//     },
//   ];



    return (
        <>
            <Head>
                <title>Encode Bootcamp Final Project</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                {/* <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>All images</h1>
            <Dropdown
              title="All Images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard> */}
                <Search onSearch={onGetByAddress} />
               
                <NFTGallery
                    isLoading={isLoading}
                    data={data}
                />
            </main>
        </>
    )
}
