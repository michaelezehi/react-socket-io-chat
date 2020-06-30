import * as React from "react";
import StyledUsername from "./styles";

const Username = ({ value }: { value: string }) => (
  <StyledUsername>{value}</StyledUsername>
);

export default Username;
