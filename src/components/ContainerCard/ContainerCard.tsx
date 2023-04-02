// import styles of this component
import styles from "./ContainerCard.module.css";
import React from "react";
type ContainerCardProps = {
  children: React.ReactNode;
  className: string;
};

// ContainerCard component
const ContainerCard: React.FC<ContainerCardProps> = ({
  children,
  className,
}) => <div className={`${styles.container} ${className}`}>{children}</div>;

export default ContainerCard;
