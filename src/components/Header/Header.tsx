

// import styles of this component
import styles from "./Header.module.css";

// import other components
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from "../../Jsons/HeaderBoxes.json";

// import react package
import React from "react";
import { Search } from "../Search/Search";
import { useGetNfts } from "@/hooks/useGetNfts";

// Header component
type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {

  const [
    isLoading,
    data,
    onGetByAddress,
] = useGetNfts();

  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>

        <Nav children={undefined} />
        <BrickLayout />

        <div
          className={`${styles["headings-header"]} flex justify-content-center flex-column `}
        >
          <h2 className={styles["heading-header-title"]}>
            Generate your shareable NFT Gallery
          </h2>
          <h1 className={styles["heading-header-second-title"]}>
            Flex that new piece. <br />
            Your NFT's to the <span>world</span>.
          </h1>
          
          <Search onSearch={onGetByAddress} />

          {/* <div className={`${styles["search-bar"]} flex align-items-center`}>
            <SearchNormal1 size="30" color="var(--white-100)" />
            <input
              type="text"
              className={styles["search-input"]}
              placeholder="Your public ethereum address"
            />
            <button
              className={`${styles["search-btn"]} flex justify-content-center align-items-center`}
            >
              <Setting4 size="20" color="var(--dark-900)" />
            </button>
          </div> */}

          <HeaderBoxes titles_numbers={JsonHeader.informations} />
        </div>
      </ContainerCard>
    </header>
  );
};

export default Header;
