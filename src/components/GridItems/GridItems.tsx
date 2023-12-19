import { Box } from "../Box/Box";
import { InitialGridItem } from "../../utils/gridStyles/gridStyles";

interface Props {
  items: InitialGridItem;
}

export const GridItems = ({ items }: Props) => {
  const gridBoxes = Object.values(items).map((item) => {
    return <Box content={item.content} style={item.style} key={item.id} />;
  });

  return <>{gridBoxes}</>;
};
