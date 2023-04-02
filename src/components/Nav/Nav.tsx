// import styles of this component
import styles from "./Nav.module.css";

// import other components
import Button from "../Elements/Button/Button";


// import other react pkg to use
import { HambergerMenu } from "iconsax-react";

// import react package
import React from "react";
import { ConnectButton } from "../ConnectButton";

type NavProps = {
  children: React.ReactNode;
};

// Nav component
const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      {/* <h1 className={styles["nav-title"]}>Gallery</h1> */}
      <img src="logoBig.png" height={44} alt="Logo" className={styles["nav-title"]} />
      <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <a href="" className={styles["nav-link"]}>
            Home
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            Mint NFTs
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            NFT Social Graph
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href="" className={styles["nav-link"]}>
            Explore
          </a>
        </li>
      </ul>
      <div className={`flex ${styles["navbar-buttons"]}`}>
        <ConnectButton />
      </div>
      <div className={styles["navbar-responsive-menu"]}>
        <Button theme="transparent">
          <HambergerMenu size="32" color="var(--white-100)" />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
