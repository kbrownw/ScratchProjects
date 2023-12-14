import styles from "./box.module.css";

interface Box {
  content: string;
  style: object;
}

export const Box = ({ content, style }: Box) => {
  return (
    <div className={`${styles.gridItem}`} style={style}>
      <h3>{content}</h3>
    </div>
  );
};
