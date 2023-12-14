import { useState } from "react";
import styles from "./customgridform.module.css";
import { GridButton } from "../GridButton/GridButton";

export const CustomGridForm = ({ defaultGrids, setDefaultGrids }) => {
  const [gridDisplay, setGridDisplay] = useState("grid");
  const [gridCols, setGridCols] = useState("");
  const [gridRows, setGridRows] = useState("");
  const [gridGap, setGridGap] = useState("");
  const [gridJustItems, setGridJustItems] = useState("");
  const [gridAlignItems, setGridAlignItems] = useState("");
  const [gridJustContent, setGridJustContent] = useState("");
  const [gridAlignContent, setGridAlignContent] = useState("");

  const handleSubmit = (
    display: string,
    cols: string,
    rows: string,
    gap: string,
    justItems: string,
    alignItems: string,
    justContent: string,
    alignContent: string
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
          setGridJustItems(e.target.value);
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
          setGridAlignItems(e.target.value);
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
        handleClick={(e) => {
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
        handleClick={(e) => {
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
