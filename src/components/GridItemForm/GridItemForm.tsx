import {
  GridItemsDefault,
  gridItemsDefault,
  InitialGridItem,
} from "../../utils/gridStyles/gridStyles";
import { useEffect, useState } from "react";
import styles from "./griditemform.module.css";
import { GridButton } from "../GridButton/GridButton";
import { initialGridItems } from "../../utils/gridStyles/gridStyles";
import { Updater } from "use-immer";

interface Props {
  items: InitialGridItem[];
  setItems: Updater<InitialGridItem[]>;
}

type handleSubmit = (
  gridItemSelect: number,
  itemColStart: string,
  itemColEnd: string,
  itemRowStart: string,
  itemRowEnd: string,
  itemJustifySelf: GridItemsDefault["justifySelf"],
  itemAlignSelf: GridItemsDefault["alignSelf"],
  itemContent: string
) => void;

export const GridItemForm = ({ items, setItems }: Props) => {
  const [gridItemSelect, setGridItemSelect] = useState<number>(0);
  const [itemColStart, setItemColStart] = useState<string>("");
  const [itemColEnd, setItemColEnd] = useState<string>("");
  const [itemRowStart, setItemRowStart] = useState<string>("");
  const [itemRowEnd, setItemRowEnd] = useState<string>("");
  const [itemJustifySelf, setItemJustifySelf] =
    useState<GridItemsDefault["justifySelf"]>("stretch");
  const [itemAlignSelf, setItemAlignSelf] =
    useState<GridItemsDefault["alignSelf"]>("stretch");
  const [itemContent, setItemContent] = useState<string>(
    initialGridItems[0].content
  );
  const [toggleRefresh, setToggleRefresh] = useState<boolean>(false);

  const handleItemSelect = (
    event: React.ChangeEvent<HTMLSelectElement> | null
  ) => {
    const item = event === null ? 0 : Number(event.target.value);
    setGridItemSelect(item);
    if (items[item].style.gridColumnStart) {
      setItemColStart(items[item].style.gridColumnStart);
    } else {
      setItemColStart(gridItemsDefault.gridColumnStart);
    }
    if (items[item].style.gridColumnEnd) {
      setItemColEnd(items[item].style.gridColumnEnd);
    } else {
      setItemColEnd(gridItemsDefault.gridColumnEnd);
    }
    if (items[item].style.gridRowStart) {
      setItemRowStart(items[item].style.gridRowStart);
    } else {
      setItemRowStart(gridItemsDefault.gridRowStart);
    }
    if (items[item].style.gridRowEnd) {
      setItemRowEnd(items[item].style.gridRowEnd);
    } else {
      setItemRowEnd(gridItemsDefault.gridRowEnd);
    }
    if (items[item].style.justifySelf) {
      setItemJustifySelf(items[item].style.justifySelf);
    } else {
      setItemJustifySelf(gridItemsDefault.justifySelf);
    }
    if (items[item].style.alignSelf) {
      setItemAlignSelf(items[item].style.alignSelf);
    } else {
      setItemAlignSelf(gridItemsDefault.alignSelf);
    }
    if (items[item].content) {
      setItemContent(items[item].content);
    } else {
      setItemContent("");
    }
  };

  const handleSubmit: handleSubmit = (
    gridItemSelect,
    itemColStart,
    itemColEnd,
    itemRowStart,
    itemRowEnd,
    itemJustifySelf,
    itemAlignSelf,
    itemContent
  ) => {
    setItems((draft) => {
      (draft[gridItemSelect].style = {
        gridColumnStart: itemColStart,
        gridColumnEnd: itemColEnd,
        gridRowStart: itemRowStart,
        gridRowEnd: itemRowEnd,
        justifySelf: itemJustifySelf,
        alignSelf: itemAlignSelf,
      }),
        (draft[gridItemSelect].content = itemContent);
    });
  };

  const handleReset = () => {
    setItemColStart("");
    setItemColEnd("");
    setItemRowStart("");
    setItemRowEnd("");
    setItemJustifySelf("stretch");
    setItemAlignSelf("stretch");
    setItemContent(initialGridItems[gridItemSelect].content);
    setToggleRefresh(!toggleRefresh);
  };

  const itemsSelect = items.map((item, index) => {
    return (
      <option key={item.id} value={index}>
        Item {index + 1}
      </option>
    );
  });

  useEffect(() => {
    handleItemSelect(null);
  }, []);

  useEffect(() => {
    handleSubmit(
      gridItemSelect,
      itemColStart,
      itemColEnd,
      itemRowStart,
      itemRowEnd,
      itemJustifySelf,
      itemAlignSelf,
      itemContent
    );
  }, [toggleRefresh]);

  return (
    <form id={styles.gridItemForm}>
      <label htmlFor="gridItemSelect">Grid Item:</label>
      <select
        name="gridItemSelect"
        id="gridItemselect"
        value={gridItemSelect}
        onChange={handleItemSelect}
      >
        {itemsSelect}
      </select>

      <label htmlFor="itemColStart">grid-column-start:</label>
      <input
        id="itemColStart"
        name="itemColStart"
        type="text"
        onChange={(e) => {
          setItemColStart(e.target.value);
        }}
        value={itemColStart}
      />

      <label htmlFor="itemColEnd">grid-column-end:</label>
      <input
        id="itemColEnd"
        name="itemColEnd"
        type="text"
        onChange={(e) => {
          setItemColEnd(e.target.value);
        }}
        value={itemColEnd}
      />

      <label htmlFor="itemRowStart">grid-row-start:</label>
      <input
        id="itemRowStart"
        name="itemRowStart"
        type="text"
        onChange={(e) => {
          setItemRowStart(e.target.value);
        }}
        value={itemRowStart}
      />

      <label htmlFor="itemRowEnd">grid-row-end:</label>
      <input
        id="itemRowEnd"
        name="itemRowEnd"
        type="text"
        onChange={(e) => {
          setItemRowEnd(e.target.value);
        }}
        value={itemRowEnd}
      />

      <label htmlFor="itemJustifySelf">justify-self:</label>
      <select
        id="itemJustifySelf"
        name="itemJustifySelf"
        onChange={(e) => {
          setItemJustifySelf(e.target.value as GridItemsDefault["justifySelf"]);
        }}
        value={itemJustifySelf}
      >
        <option value="start">Start</option>
        <option value="end">End</option>
        <option value="center">Center</option>
        <option value="stretch">Stretch</option>
      </select>

      <label htmlFor="itemAlignSelf">align-self:</label>
      <select
        id="itemAlignSelf"
        name="itemAlignSelf"
        onChange={(e) => {
          setItemAlignSelf(e.target.value as GridItemsDefault["alignSelf"]);
        }}
        value={itemAlignSelf}
      >
        <option value="start">Start</option>
        <option value="end">End</option>
        <option value="center">Center</option>
        <option value="stretch">Stretch</option>
      </select>

      <label htmlFor="itemContent">Item Content:</label>
      <input
        id="itemContent"
        name="itemContent"
        type="text"
        onChange={(e) => {
          setItemContent(e.target.value);
        }}
        value={itemContent}
      />
      <GridButton
        text="Submit"
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          handleSubmit(
            gridItemSelect,
            itemColStart,
            itemColEnd,
            itemRowStart,
            itemRowEnd,
            itemJustifySelf,
            itemAlignSelf,
            itemContent
          );
        }}
      />
      <GridButton
        text="Reset Item"
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          handleReset();
        }}
      />
      <div style={{ gridColumn: "1 / 3" }}>
        <GridButton
          text="Reset All Items"
          handleClick={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setItems(initialGridItems);
            handleReset();
          }}
        />
      </div>
    </form>
  );
};
