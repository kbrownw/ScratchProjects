import styles from "./plusbutton.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  clickEvent: (event?: unknown) => void;
};

export function PlusButton({ clickEvent }: Props) {
  const [springs, api] = useSpring(() => ({
    from: { transform: "rotate(0deg)" },
  }));
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    !rotate
      ? api.start({
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(45deg)",
          },
        })
      : api.start({
          from: {
            transform: "rotate(45deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        });
    setRotate(!rotate);
  };

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    handleRotate();
    clickEvent ? clickEvent(event) : null;
  };
  return (
    <animated.button
      className={`${styles.plusButton}`}
      onClick={(e) => {
        handleClick(e);
      }}
      style={{ ...springs }}
    >
      +
    </animated.button>
  );
}
