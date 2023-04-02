// import styles of this component
import styles from "./Button.module.css";
import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  theme: string;
  onClick?: () => void;
  className?: string;
};

// Button component
const Button: React.FC<ButtonProps> = ({
  children,
  theme,
  onClick,
  className,
}) => (
  <button
    className={`${styles.button} ${styles[theme]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
