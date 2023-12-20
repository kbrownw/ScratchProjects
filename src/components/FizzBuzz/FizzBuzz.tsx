import { useState } from "react";
import styles from "./fizzbuzz.module.css";
import { FizzBuzzResult } from "../FizzBuzzResult/FizzBuzzResult";
import { GridButton } from "../GridButton/GridButton";

export const FizzBuzz = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [fizzBuzzArr, setFizzBuzzArr] = useState<Array<string | number>>([]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(event.target.value);
    event.preventDefault();
    let arr = [];
    setFizzBuzzArr([]);
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i && i % 5 === 0) {
        arr.push("fizzbuzz");
      } else if (i % 3 === 0) {
        arr.push("fizz");
      } else if (i % 5 === 0) {
        arr.push("buzz");
      } else {
        arr.push(i);
      }
    }
    setFizzBuzzArr(arr);
    setAmount("");
  };

  return (
    <div className={styles.gridDiv}>
      <form
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2em" }}
      >
        <input
          style={{ alignSelf: "center", height: "3em", textAlign: "center" }}
          value={amount}
          type="number"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          placeholder="0"
          name="amount"
        ></input>
        <GridButton value={amount} text="FizzBuzz" handleClick={handleClick} />
      </form>
      <FizzBuzzResult result={fizzBuzzArr} />
    </div>
  );
};
