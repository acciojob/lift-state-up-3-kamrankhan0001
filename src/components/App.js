
import React, { useState } from "react";
import './../styles/App.css';

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <h2>Child Component 1</h2>
      <Child buttonText="Option 1" handleClick={handleButtonClick} />
      <h2>Child Component 2</h2>
      <Child buttonText="Option 2" handleClick={handleButtonClick} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

const Child = ({ buttonText, handleClick }) => {
  return (
    <div className="child">
      <button onClick={() => handleClick(buttonText)}>{buttonText}</button>
    </div>
  );
};

export default Parent;
