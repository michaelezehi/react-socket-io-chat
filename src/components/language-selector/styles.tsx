import styled from "../../theme";

const StyledStyledLanguageSelector = styled("div")`
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.primaryDark};

  select {
    color: ${(props) => props.theme.secondaryLight};
    width: 100%;
    line-height: 28px;
    margin-top: 7px;
    font-size: 1.1em;
    box-sizing: border-box;
    padding: 7px;
  }
`;

export default StyledStyledLanguageSelector;
