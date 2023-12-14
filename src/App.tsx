import { Routes, Route } from "react-router-dom";
import "./App.css";
import { FizzBuzz } from "./components/FizzBuzz/FizzBuzz";
import { Grid } from "./components/Grid/Grid";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2em 0" }}>
        <Routes>
          <Route path="/" element={<Grid />}></Route>
          <Route path="/fizzbuzz" element={<FizzBuzz />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
