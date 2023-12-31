import { useState } from "react";
import { GridStyles, GridStyle } from "../../utils/gridStyles/gridStyles";
import styles from "./customgridform.module.css";
import { GridButton } from "../GridButton/GridButton";

interface Props {
  selectedGrid?: string;
  setSelectedGrid?: React.Dispatch<React.SetStateAction<string>>;
  defaultGrids: GridStyles;
  setDefaultGrids: React.Dispatch<React.SetStateAction<GridStyles>>;
}

export const CustomGridForm = ({ defaultGrids, setDefaultGrids }: Props) => {
  const [gridDisplay, setGridDisplay] = useState<GridStyle["display"]>("grid");
  const [gridCols, setGridCols] =
    useState<GridStyle["gridTemplateColumns"]>("auto");
  const [gridRows, setGridRows] =
    useState<GridStyle["gridTemplateRows"]>("auto");
  const [gridGap, setGridGap] = useState<GridStyle["gap"]>("");
  const [gridJustItems, setGridJustItems] =
    useState<GridStyle["justifyItems"]>("stretch");
  const [gridAlignItems, setGridAlignItems] =
    useState<GridStyle["alignItems"]>("stretch");
  const [gridJustContent, setGridJustContent] =
    useState<GridStyle["justifyContent"]>("");
  const [gridAlignContent, setGridAlignContent] =
    useState<GridStyle["alignContent"]>("");

  const handleSubmit = (
    display: GridStyle["display"],
    cols: GridStyle["gridTemplateColumns"],
    rows: GridStyle["gridTemplateRows"],
    gap: GridStyle["gap"],
    justItems: GridStyle["justifyItems"],
    alignItems: GridStyle["alignItems"],
    justContent: GridStyle["justifyContent"],
    alignContent: GridStyle["alignContent"]
  ) => {
    setDefaultGrids({
      ...defaultGrids,
      customGridStyles: {
        display: display,
        gridTemplateColumns: cols,
        gridTemplateRows: rows,
        gap: gap,
        justifyItems: justItems,
        alignItems: alignItems,
        justifyContent: justContent,
        alignContent: alignContent,
      },
    });
  };

  return (
    <form id={styles.customGridForm} className="transition-height">
      <label htmlFor="customGridDisplay">display:</label>
      <select
        name="customGridDisplay"
        id="customGridDisplay"
        onChange={(e) => {
          setGridDisplay(e.target.value);
        }}
        value={gridDisplay}
      >
        <option value="grid">grid</option>
        <option value="inline-grid">inline-grid</option>
      </select>

      <label htmlFor="customGridCols">grid-template-columns:</label>
      <input
        type="text"
        id="customGridCols"
        name="customGridCols"
        placeholder="e.g. 1fr 1fr / minmax(10px, 1fr) 3fr/ etc..."
        onChange={(e) => {
          setGridCols(e.target.value);
        }}
        value={gridCols}
      />

      <label htmlFor="customGridRows">grid-template-rows:</label>
      <input
        type="text"
        id="customGridRows"
        name="customGridRows"
        placeholder="min-content 1fr / 100px max-content/etc..."
        onChange={(e) => {
          setGridRows(e.target.value);
        }}
        value={gridRows}
      />

      <label htmlFor="customGridGap">gap:</label>
      <input
        type="text"
        id="customGridGap"
        name="customGridGap"
        placeholder="1em / 10px 2rem/ etc..."
        onChange={(e) => {
          setGridGap(e.target.value);
        }}
        value={gridGap}
      />

      <label htmlFor="customGridJustifyItems">justify-items:</label>
      <select
        name="customGridJustifyItems"
        id="customGridJustifyItems"
        onChange={(e) => {
          setGridJustItems(e.target.value as GridStyle["justifyItems"]);
        }}
        value={gridJustItems}
      >
        <option value="">none</option>
        <option value="start">start</option>
        <option value="end">end</option>
        <option value="center">center</option>
        <option value="stretch">stretch</option>
      </select>

      <label htmlFor="customGridAlignItems">align-items:</label>
      <select
        name="customGridAlignItems"
        id="customGridAlignItems"
        onChange={(e) => {
          setGridAlignItems(e.target.value as GridStyle["alignItems"]);
        }}
        value={gridAlignItems}
      >
        <option value="">none</option>
        <option value="start">start</option>
        <option value="end">end</option>
        <option value="center">center</option>
        <option value="stretch">stretch</option>
      </select>

      <label htmlFor="customGridJustifyContent">justify-content:</label>
      <select
        name="customGridJustifyContent"
        id="customGridJustifyContent"
        onChange={(e) => {
          setGridJustContent(e.target.value);
        }}
        value={gridJustContent}
      >
        <option value="">none</option>
        <option value="start">start</option>
        <option value="end">end</option>
        <option value="center">center</option>
        <option value="stretch">stretch</option>
        <option value="space-around">space-around</option>
        <option value="space-between">space-between</option>
        <option value="space-evenly">space-evenly</option>
      </select>

      <label htmlFor="customGridAlignContent">align-content</label>
      <select
        name="customGridAlignContent"
        id="customGridAlignContent"
        onChange={(e) => {
          setGridAlignContent(e.target.value);
        }}
        value={gridAlignContent}
      >
        <option value="">none</option>
        <option value="start">start</option>
        <option value="end">end</option>
        <option value="center">center</option>
        <option value="stretch">stretch</option>
        <option value="space-around">space-around</option>
        <option value="space-between">space-between</option>
        <option value="space-evenly">space-evenly</option>
      </select>
      <GridButton
        text="Submit"
        handleClick={(e: React.FormEvent) => {
          e.preventDefault();
          handleSubmit(
            gridDisplay,
            gridCols,
            gridRows,
            gridGap,
            gridJustItems,
            gridAlignItems,
            gridJustContent,
            gridAlignContent
          );
        }}
      />
      <GridButton
        text="Reset Values"
        handleClick={(e: React.FormEvent) => {
          e.preventDefault();
          setGridDisplay("grid");
          setGridCols("");
          setGridRows("");
          setGridGap("");
          setGridJustItems("");
          setGridAlignItems("");
          setGridJustContent("");
          setGridAlignContent("");
        }}
      />
    </form>
  );
};
