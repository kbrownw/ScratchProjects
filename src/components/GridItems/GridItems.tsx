import { Box } from "../Box/Box";

export const GridItems = ({ items }) => {
  const gridBoxes = Object.values(items).map((item) => {
    return <Box content={item.content} style={item.style} key={item.id} />;
  });

  return <>{gridBoxes}</>;
};
