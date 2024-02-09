import { Container, Content, Row } from "./styles.ts";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [waitingForOperator, setWaitingForOperator] = useState(false);

  const handleAddNumber = (number) => {
    if (waitingForOperator) {
      setCurrentNumber(number);
      setWaitingForOperator(false);
    } else {
      setCurrentNumber((prev) => `${prev === 0 ? "" : prev}${number}`);
    }
  };

  const handleOnClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setWaitingForOperator(false);
  };

  const handleInvNumber = () => {
    setCurrentNumber((prev) => (prev[0] === "-" ? prev.slice(1) : `-${prev}`));
  };

  const handleSumNumber = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber(0);
      setOperation("+");
      setWaitingForOperator(true);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
      setFirstNumber(0);
      setOperation("+");
      setWaitingForOperator(true);
    }
  };

  const handleSubNumber = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber(0);
      setOperation("-");
      setWaitingForOperator(true);
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(subtraction);
      setFirstNumber(0);
      setOperation("-");
      setWaitingForOperator(true);
    }
  };

  const handleMultNumber = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber(0);
      setOperation("*");
      setWaitingForOperator(true);
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(multiplication);
      setFirstNumber(0);
      setOperation("*");
      setWaitingForOperator(true);
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber(0);
      setOperation("/");
      setWaitingForOperator(true);
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(division);
      setFirstNumber(0);
      setOperation("/");
      setWaitingForOperator(true);
    }
  };

  const handlePorNumber = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber(0);
      setOperation("%");
      setWaitingForOperator(true);
    } else {
      const remainder = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(remainder);
      setFirstNumber(0);
      setOperation("%");
      setWaitingForOperator(true);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== 0 && operation !== "" && currentNumber !== 0) {
      switch (operation) {
        case "+":
          setCurrentNumber(Number(firstNumber) + Number(currentNumber));
          break;
        case "-":
          setCurrentNumber(Number(firstNumber) - Number(currentNumber));
          break;
        case "*":
          setCurrentNumber(Number(firstNumber) * Number(currentNumber));
          break;
        case "/":
          setCurrentNumber(Number(firstNumber) / Number(currentNumber));
          break;
        case "%":
          setCurrentNumber(Number(firstNumber) % Number(currentNumber));
          break;
        default:
          break;
      }
      setFirstNumber(0);
      setOperation("");
      setWaitingForOperator(true);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button
            label="C"
            onClick={handleOnClear}
            bgColor={"#C0C0C0"}
            color={"#000000"}
          />
          <Button
            label="+/-"
            onClick={handleInvNumber}
            bgColor={"#C0C0C0"}
            color={"#000000"}
          />
          <Button
            label="%"
            onClick={handlePorNumber}
            bgColor={"#C0C0C0"}
            color={"#000000"}
          />
          <Button
            label="÷"
            onClick={handleDivNumber}
            bgColor={"#FFA500"}
            color={"white"}
          />
        </Row>
        <Row>
          <Button
            label="7"
            onClick={() => handleAddNumber("7")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="8"
            onClick={() => handleAddNumber("8")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="9"
            onClick={() => handleAddNumber("9")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="X"
            onClick={handleMultNumber}
            bgColor={"	#FFA500"}
            color={"white"}
          />
        </Row>
        <Row>
          <Button
            label="4"
            onClick={() => handleAddNumber("4")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="5"
            onClick={() => handleAddNumber("5")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="6"
            onClick={() => handleAddNumber("6")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="-"
            onClick={handleSubNumber}
            bgColor={"#FFA500"}
            color={"white"}
          />
        </Row>
        <Row>
          <Button
            label="1"
            onClick={() => handleAddNumber("1")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="2"
            onClick={() => handleAddNumber("2")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="3"
            onClick={() => handleAddNumber("3")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="+"
            onClick={handleSumNumber}
            bgColor={"	#FFA500"}
            color={"white"}
          />
        </Row>
        <Row>
          <Button
            label="0"
            onClick={() => handleAddNumber("0")}
            bgColor={"#4F4F4F"}
            color={"white"}
            width={200}
          />
          <Button
            label=","
            onClick={() => handleAddNumber(",")}
            bgColor={"#4F4F4F"}
            color={"white"}
          />
          <Button
            label="="
            onClick={handleEquals}
            bgColor={"#FFA500"}
            color={"white"}
          />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
