interface GridStyle {
  display: "grid" | "inline-grid";
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

interface GridStyles {
  grid1: object;
  grid2: object;
  grid3: object;
  grid4: object;
  customGridStyles: object;
}

export const gridStyles: GridStyles = {
  grid1: grid1,
  grid2: grid2,
  grid3: grid3,
  grid4: grid4,
  customGridStyles: customGridStyles,
};

export const gridNames = {
  grid1: "grid1",
  grid2: "grid2",
  grid3: "grid3",
  grid4: "grid4",
  custom: "customGridStyles",
};

export const initialGridItems = {
  item0: {
    content: "Lorem ipsum",
    id: 0,
    style: {},
  },
  item1: {
    content: "Nascetur ridiculus",
    id: 1,
    style: {},
  },
  item2: {
    content: "Enim neque volutpat ac tincidunt vitae",
    id: 2,
    style: {},
  },
  item3: {
    content: "Massa",
    id: 3,
    style: {},
  },
  item4: {
    content: "In nisl nisi scelerisque eu",
    id: 4,
    style: {},
  },
  item5: {
    content: "Urna id volutpat lacus laoreet non curabitur gravida",
    id: 5,
    style: {},
  },
};

export const gridItemsDefault = {
  gridColumnStart: "",
  gridColumnEnd: "",
  gridRowStart: "",
  gridRowEnd: "",
  justifySelf: "stretch",
  alignSelf: "stretch",
};
