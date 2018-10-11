import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";

const Button = styled(ButtonBase)`
  text-transform: uppercase;
  &:disabled {
    color: grey;
  }
`;

export default Button;
