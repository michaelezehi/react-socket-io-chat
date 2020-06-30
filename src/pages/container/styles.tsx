import styled from "../../theme";

const Container = styled("section")`
  text-align: center;
  margin-top: 60px;
  height: calc(100vh - 60px);
  color: ${(props) => props.theme.secondaryLight};
  background-color: ${(props) => props.theme.secondaryDark};
`;

export default Container;
