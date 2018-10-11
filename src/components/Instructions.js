import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { withStyles } from "@material-ui/core/styles";
import Button from "./Button";
import { FaAngleDoubleRight } from "react-icons/fa";

const styles = () => ({
  icon: {
    color: "#EE5A24 !important"
  },
  iconActive: {
    color: "#F79F1F !important"
  },
  iconComplete: {
    color: "#A3CB38 !important"
  }
});

const getSteps = () => [
  "Place oranges in a pot of boiling water for a moment, then remove and scrub to remove any dirt and wax.",
  "I sometimes find the white pith of the orange makes the marmalade too bitter for my liking, so take half the oranges and halve from stem end, then slice thinly with a sharp knife. Place in a large pot.",
  "The other half, grate the orange peel and place in the pot.",
  "Cut away the white pith and discard.",
  "Slice the leftover orange as finely as possible and place in the pot as well.",
  "Cover with a lid and let stand to soak for 24 hours.",
  "Next day, turn on the stove, and bring to a boil and simmer for 1.5 hours.",
  "Cover and let stand again for 12 hours.",
  "The next morning, stir in the 4 cups of white sugar and bring to a boil.",
  "Remove the lid and let simmer for 1 hour. For more accuracy, you can use a candy thermometer and remove from heat when the mixture reaches 220F.",
  "Let cool before spooning into large glass jars.",
  "Place in fridge to store."
];

const getIngredients = () => [
  {
    name: "Large Oranges",
    amount: 3,
    units: "lb"
  },
  {
    name: "Water",
    amount: 6,
    units: "cups"
  },
  {
    name: "White Sugar",
    amount: 4,
    units: "cups"
  }
];

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  handleStep = () =>
    this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));

  render() {
    return (
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          height: "500px",
          overflow: "Scroll"
        }}>
        <h3>Ingredients</h3>
        <div style={{ padding: ".5rem" }}>
          <h6>What you'll need:</h6>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <ul style={{ margin: ".5rem" }}>
              {getIngredients().map(({ name, amount, units }, index) => (
                <li key={index}>{`${amount} ${units} ${name}`}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3>Instructions</h3>
        <Stepper activeStep={this.state.activeStep} orientation="vertical">
          {getSteps().map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    root: this.props.classes.icon,
                    active: this.props.classes.iconActive,
                    completed: this.props.classes.iconComplete
                  }
                }}>
                {step}
              </StepLabel>
              <StepContent>
                <Button onClick={this.handleStep} style={{ float: "right" }}>
                  Complete <FaAngleDoubleRight style={{ margin: ".25rem" }} />
                </Button>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default withStyles(styles)(Instructions);
