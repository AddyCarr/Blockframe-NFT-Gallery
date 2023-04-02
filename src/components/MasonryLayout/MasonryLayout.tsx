// import styles of this component
import styles from "./MasonryLayout.module.css";
import React from "react";
type MasonryLayoutProps = {
  images: {
    id: number;
    src: string;
    user: {
      src: string;
      name: string;
      job: string;
    };
  }[];
};

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";

// MasonryLayout Component
const MasonryLayout: React.FC<MasonryLayoutProps> = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {images.map((item) => (
        <MasonryBox
          key={item.id}
          wallSrc={5}
          userProf={item.user.src}
          userName={item.user.name}
          userJob={item.user.job}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
