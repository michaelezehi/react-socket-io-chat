import styled from "../../theme";

const StyledResetButton = styled("div")`
  width: 100%;
  position: fixed;
  bottom: 14px;

  button {
    width: 100%;
    line-height: 28px;
    font-size: 1.1em;
    padding: 7px;
    color: ${(props) => props.theme.primaryLight};
    background-color: ${(props) => props.theme.secondaryDark};
  }
`;

export default StyledResetButton;
