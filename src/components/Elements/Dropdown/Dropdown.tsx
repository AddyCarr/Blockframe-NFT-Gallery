import { useState } from "react";
import React from "react";
// import styles of this component
import styles from "./Dropdown.module.css";

// import other react pkg to use
import { ArrowUp3 } from "iconsax-react";

// import other component to use
import Button from "../Button/Button";

type DropdownProps = {
  items: {
    id: number;
    title: string;
    active: boolean;
  };
  title: string;
  liftingDdTextUp: (ddTitle: string) => void;
};

// Dropdown Component
const Dropdown: React.FC<DropdownProps> = ({
  items,
  title,
  liftingDdTextUp,
}) => {
  const [ddTitle, setDdTitle] = useState(title);
  const [ddItemsState, setDdItem] = useState(items);

  // ?? WHAT IS EV HERE AND IT'S TYPE ??
  const ddItem = (ddId: number, ev) => {
    const ddTitle = ev.target.innerHTML;
    activeDropDownItem(ddId);
    setDdTitle(ddTitle);
    liftingDdTextUp && liftingDdTextUp(ddTitle);
  };

  // ?? WHAT IS PREV HERE AND IT'S TYPE ??
  const activeDropDownItem = (dropdownItemId: number) => {
    setDdItem((prev) => {
      prev.forEach((item) => (item.active = false));
      const myDd = prev.find((ddId) => ddId.id === dropdownItemId);
      myDd.active = true;
      return [...prev];
    });
  };

  return (
    <div className={styles["dropdown"]}>
      <Button theme="transparent" className="flex align-items-center">
        {ddTitle}
        <span className={styles["dropdown-arrow-icon"]}>
          <ArrowUp3 color="var(--green-400)" />
        </span>
      </Button>
      <ul className={styles["dropdown-menu"]}>
        {ddItemsState.map((item) => (
          <li
            key={item.id}
            className={`${styles["dropdown-item-menu"]} ${
              item.active && styles.active
            }`}
            onClick={(ev) => ddItem(item.id, ev)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
