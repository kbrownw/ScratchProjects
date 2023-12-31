import { InitialGridItem } from "../../utils/gridStyles/gridStyles";
import { useSpring, animated } from "@react-spring/web";
import { getHeight } from "../../utils/functions/getHeight";
import { useState, useRef } from "react";
import { GridButton } from "../GridButton/GridButton";
import { GridItemForm } from "../GridItemForm/GridItemForm";
import { Updater } from "use-immer";

interface Props {
  items: InitialGridItem[];
  setItems: Updater<InitialGridItem[]>;
}

export const GridItemSetup = ({ items, setItems }: Props) => {
  const [toggle, setToggle] = useState(false);
  const element = useRef<HTMLDivElement>(null!);
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }));
  const handleClick = () => {
    const height = getHeight(element.current);
    toggle
      ? api.start({
          from: {
            height: height,
          },
          to: {
            height: 0,
          },
        })
      : api.start({
          from: {
            height: 0,
          },
          to: {
            height: height,
          },
        });
    setToggle(!toggle);
  };

  return (
    <>
      <GridButton text="Grid Items" handleClick={handleClick} />
      <animated.div style={{ overflow: "hidden", ...springs }} ref={element}>
        <GridItemForm items={items} setItems={setItems} />
      </animated.div>
    </>
  );
};
