import styles from "./gridbutton.module.css";

interface props {
  text: string;
  value?: string | number;
  handleClick: any;
  className?: string | null;
}

export const GridButton = (props: props) => {
  const { text, value, handleClick, className } = props;
  return (
    <button
      type="submit"
      value={value}
      className={`${styles.gridButton} ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
