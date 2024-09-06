import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Resullts from "./components/Resullts";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChangeInput={handleChange} />
      <Resullts input={userInput} />
    </>
  );
}

export default App;
