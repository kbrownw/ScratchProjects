import styles from "./fizzbuzzresult.module.css";

interface Props {
  result: Array<string | number>;
}

export const FizzBuzzResult = ({ result }: Props) => {
  let colNum = 1;
  console.log(result);
  if (result.length > 50 && result.length < 100) {
    colNum = 2;
  } else if (result.length >= 100 && result.length < 150) {
    colNum = 3;
  } else if (result.length >= 150) {
    colNum = 4;
  }
  const results = result.map((item, index) => {
    return (
      <li key={index} style={{ color: "white" }}>
        {item}
      </li>
    );
  });

  const sliceNum = Math.ceil(results.length / colNum);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${colNum}, 1fr)`,
        width: "100%",
        gap: "10px",
      }}
      className={`${styles["FB-Result"]}`}
    >
      {results.length > 0 ? <ul>{results.slice(0, sliceNum)}</ul> : null}
      {colNum > 1 ? <ul>{results.slice(sliceNum, sliceNum * 2)}</ul> : null}
      {colNum >= 3 ? (
        <ul>{results.slice(sliceNum * 2, sliceNum * 3)}</ul>
      ) : null}
      {colNum === 4 ? (
        <ul>{results.slice(sliceNum * 3, result.length)}</ul>
      ) : null}
    </div>
  );
};
