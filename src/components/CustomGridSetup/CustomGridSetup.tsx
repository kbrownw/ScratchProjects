import { useSpring, animated } from "@react-spring/web";
import { useState, useRef, useEffect } from "react";
import { gridNames, GridStyles } from "../../utils/gridStyles/gridStyles";
import { getHeight } from "../../utils/functions/getHeight";
import { GridButton } from "../GridButton/GridButton";
import { CustomGridForm } from "../CustomGridForm/CustomGridForm";
import styles from "./customgridsetup.module.css";

interface Props {
  selectedGrid: string;
  setSelectedGrid: React.Dispatch<React.SetStateAction<string>>;
  defaultGrids: GridStyles;
  setDefaultGrids: React.Dispatch<React.SetStateAction<GridStyles>>;
}

export function CustomGridSetup({
  selectedGrid,
  setSelectedGrid,
  defaultGrids,
  setDefaultGrids,
}: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const element = useRef<HTMLDivElement>(null!);
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }));
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const clickedButton = event.target;
    setSelectedGrid(clickedButton.value);
  };

  useEffect(() => {
    if (element != null && toggle) {
      if (selectedGrid != gridNames.custom) {
        const height = getHeight(element.current);
        api.start({
          from: {
            height: height,
          },
          to: {
            height: 0,
          },
        });
        setToggle(false);
      }
    }
  }, [selectedGrid]);

  return (
    <>
      <GridButton
        text="Custom Grid"
        value={gridNames.custom}
        handleClick={handleClick}
        className={selectedGrid === gridNames.custom ? styles.selected : null}
      />
      <animated.div style={{ overflow: "hidden", ...springs }} ref={element}>
        <CustomGridForm
          defaultGrids={defaultGrids}
          setDefaultGrids={setDefaultGrids}
        />
      </animated.div>
    </>
  );
}
