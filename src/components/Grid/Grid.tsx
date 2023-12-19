import { useState } from "react";
import styles from "./grid.module.css";
import {
  gridStyles,
  gridNames,
  GridStyles,
  GridName,
  InitialGridItem,
} from "../../utils/gridStyles/gridStyles";
import { GridButton } from "../GridButton/GridButton";
import { DropdownWithTitle } from "../DropdownWIthTitle/DropdownWithTitle";
import { CustomGridSetup } from "../CustomGridSetup/CustomGridSetup";
import { GridItems } from "../GridItems/GridItems";
import { GridItemSetup } from "../GridItemSetup/GridItemSetup";
import { initialGridItems } from "../../utils/gridStyles/gridStyles";
import { useImmer } from "use-immer";

export const Grid = () => {
  const [selectedGrid, setSelectedGrid] = useState<GridName>(gridNames.grid1);
  const [defaultGrids, setDefaultGrids] = useState<GridStyles>(gridStyles);
  const [items, setItems] = useImmer<InitialGridItem[]>(initialGridItems);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGrid(event.target.value);
  };

  const gridStylesView = Object.entries(defaultGrids[selectedGrid]).map(
    ([key, value], index) => {
      return (
        <li
          key={index}
          className={`${styles.gridListItem}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1em",
          }}
        >
          <div>
            <span style={{ color: "coral" }}>{key}</span>:
          </div>
          {value}
        </li>
      );
    }
  );

  return (
    <article id={`${styles.gridPage}`}>
      <DropdownWithTitle
        title="Active Grid Styles"
        listClass={styles.gridList}
        object={gridStylesView}
        watcher={selectedGrid}
      />
      <div className={styles.gridBtns}>
        <GridButton
          text="Grid 1"
          value={gridNames.grid1}
          handleClick={handleClick}
          className={selectedGrid === gridNames.grid1 ? styles.selected : null}
        />
        <GridButton
          text="Grid 2"
          value={gridNames.grid2}
          handleClick={handleClick}
          className={selectedGrid === gridNames.grid2 ? styles.selected : null}
        />
        <GridButton
          text="Grid 3"
          value={gridNames.grid3}
          handleClick={handleClick}
          className={selectedGrid === gridNames.grid3 ? styles.selected : null}
        />
        <GridButton
          text="Grid 4"
          value={gridNames.grid4}
          handleClick={handleClick}
          className={selectedGrid === gridNames.grid4 ? styles.selected : null}
        />
        <div
          className={styles.largeGridBtns}
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
        >
          <CustomGridSetup
            selectedGrid={selectedGrid}
            setSelectedGrid={setSelectedGrid}
            defaultGrids={defaultGrids}
            setDefaultGrids={setDefaultGrids}
          />
        </div>
        <div
          className={styles.largeGridBtns}
          style={{
            gridColumnStart: 3,
            gridColumnEnd: 5,
          }}
        >
          <GridItemSetup items={items} setItems={setItems} />
        </div>
      </div>

      <article className="gridExample">
        <section style={defaultGrids[selectedGrid]}>
          <GridItems items={items} />
        </section>
      </article>
    </article>
  );
};
