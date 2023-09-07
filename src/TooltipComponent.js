import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

//this tooltipComponent renders a button with a tooltip using bootstrap library
//This componnet is defined as functional component that receives position passed as prop
function TooltipComponent({ position }) {
  return (
    <>
      {/* OverlayTrigger component to wrap the content that triggers the tooltip */}
      <OverlayTrigger
        className="tooltip"
        //placement prop is set to the value of the position prop received from the parent component.
        placement={position}
        overlay={
          // Ṭooltip component provides content of tooltip
          <Tooltip id={`tooltip-${position}`}>
            Thanks for hovering, I am a Tooltip.
          </Tooltip>
        }
      >
        <Button variant="info">Hover over me !!</Button>
      </OverlayTrigger>
    </>
  );
}

export default TooltipComponent;
