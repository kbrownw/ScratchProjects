export interface GridStyle {
  display?: "grid" | "inline-grid";
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;
  justifyItems?: string;
  alignItems?: string;
  justifyContent?: string;
  alignContent?: string;
}

const grid1: GridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2em",
};

const grid2: GridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr 3fr 1fr",
  justifyItems: "self-end",
};

const grid3: GridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 20%",
  gridTemplateRows: "1fr 3fr",
  alignItems: "end",
  justifyItems: "end",
  gap: "2rem",
};

const grid4: GridStyle = {
  display: "grid",
  gridTemplateColumns: "0.5fr 1fr",
  gridTemplateRows: "5fr 1fr 150px",
  gap: "1em",
};

const customGridStyles: GridStyle = {
  display: "grid",
  gridTemplateColumns: "auto",
  gridTemplateRows: "auto",
  gap: "",
  justifyItems: "",
  alignItems: "",
  justifyContent: "",
  alignContent: "",
};

export interface GridStyles {
  grid1: GridStyle;
  grid2: GridStyle;
  grid3: GridStyle;
  grid4: GridStyle;
  customGridStyles: GridStyle;
}

export const gridStyles: GridStyles = {
  grid1: grid1,
  grid2: grid2,
  grid3: grid3,
  grid4: grid4,
  customGridStyles: customGridStyles,
};

export interface GridNames {
  grid1: "grid1";
  grid2: "grid2";
  grid3: "grid3";
  grid4: "grid4";
  custom: "customGridStyles";
}

export const gridNames: GridNames = {
  grid1: "grid1",
  grid2: "grid2",
  grid3: "grid3",
  grid4: "grid4",
  custom: "customGridStyles",
};

export interface GridItemsDefault {
  gridColumnStart: string;
  gridColumnEnd: string;
  gridRowStart: string;
  gridRowEnd: string;
  justifySelf: "start" | "end" | "center" | "stretch";
  alignSelf: "start" | "end" | "center" | "stretch";
}

export const gridItemsDefault: GridItemsDefault = {
  gridColumnStart: "",
  gridColumnEnd: "",
  gridRowStart: "",
  gridRowEnd: "",
  justifySelf: "stretch",
  alignSelf: "stretch",
};
export interface InitialGridItem {
  content: string;
  id: number;
  style: GridItemsDefault;
}

const item0: InitialGridItem = {
  content: "Lorem ipsum",
  id: 0,
  style: gridItemsDefault,
};

const item1: InitialGridItem = {
  content: "Nascetur ridiculus",
  id: 1,
  style: gridItemsDefault,
};

const item2: InitialGridItem = {
  content: "Enim neque volutpat ac tincidunt vitae",
  id: 2,
  style: gridItemsDefault,
};

const item3: InitialGridItem = {
  content: "Massa",
  id: 3,
  style: gridItemsDefault,
};

const item4: InitialGridItem = {
  content: "In nisl nisi scelerisque eu",
  id: 4,
  style: gridItemsDefault,
};

const item5: InitialGridItem = {
  content: "Urna id volutpat lacus laoreet non curabitur gravida",
  id: 5,
  style: gridItemsDefault,
};

export const initialGridItems: InitialGridItem[] = [
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
];
