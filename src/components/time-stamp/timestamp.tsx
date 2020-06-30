import * as React from "react";
import StyledTimestamp from "./styles";

const Timestamp = ({
  value,
  floatToRight,
}: {
  value: string;
  floatToRight: boolean;
}) => <StyledTimestamp floatToRight={floatToRight}>{value}</StyledTimestamp>;

export default Timestamp;
