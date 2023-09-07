import { useState } from "react";
import TooltipComponent from "./TooltipComponent"; 
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
  //useState hook to create state variable and corresponding function setPosition
  const [position, setPosition] = useState("left");

  //function defined to handle button clicks
  const handleButtonClick = (value) => {
    //update the position state variable with new value
    setPosition(value);
    console.log(value);
  };

  //returning JSX code
  return (
    <div className="App">
      {/* Position state variable is passed as prop to tooltip component */}
      <TooltipComponent position={position} /> 
      {/* Button Group component is rendered */}
      <ButtonGroup aria-label="Button Group" id="buttons">

        {/* onClick event handler to call handleButtonClick fn with corresponding position value */}
        <Button variant="primary" onClick={() => handleButtonClick("left")}>
          Left
        </Button>
        <Button variant="secondary"  onClick={() => handleButtonClick("top")}>
          Top
        </Button>
        <Button variant="success" onClick={() => handleButtonClick("right")}>
          Right
        </Button>
        <Button variant="warning" onClick={() => handleButtonClick("bottom")}>
          Bottom
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
