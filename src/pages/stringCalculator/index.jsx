import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Container from "../../components/Container";
import "./StringCalculator.css";
import add from "./calculate";

const StringCalculator = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState(null);

  const handleClick = () => {
    let res = add(value);
    setResults(res);
  };
  return (
    <div>
      <Container>
        <div className="valueWrapper">
          <div className="textWrapper"> Enter your input here...</div>
          <TextField
            style={{ width: "100%" }}
            type="text"
            predicted="CalculateString"
            locked={false}
            value={value}
            setValue={setValue}
          />
        </div>
        <Button label="Click Me" onClick={handleClick} />
      </Container>
      <Container
        style={{
          height: "20vh",
          justifyContent: "center",
        }}
      >
        <div>RESULT</div>
        <div>{results}</div>
      </Container>
    </div>
  );
};

export default StringCalculator;
