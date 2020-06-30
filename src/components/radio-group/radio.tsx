import * as React from "react";
import StyledRadioGroup from "./styles";

interface IRadioGroupProps {
  leftRadioLabel: string;
  leftRadioValue: string;
  rightRadioLabel: string;
  rightRadioValue: string;
  radioGroupName: string;
  callback: (val: string) => void;
  isLeftChecked: boolean;
}

interface IRadioGroupState {
  isChecked: boolean;
}

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const [state, setState] = React.useState<IRadioGroupState>({
    isChecked: props.isLeftChecked,
  });
  const {
    leftRadioLabel,
    leftRadioValue,
    rightRadioLabel,
    rightRadioValue,
    radioGroupName,
  } = props;

  const { isChecked } = state;
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.callback(e.currentTarget.value);
    setState({
      isChecked: !state.isChecked,
    });
  };
  return (
    <StyledRadioGroup>
      <div>
        <input
          checked={isChecked}
          radioGroup={radioGroupName}
          type="radio"
          id={leftRadioLabel}
          name={radioGroupName}
          value={leftRadioValue}
          onChange={handleOnChange}
        />
        <label htmlFor={leftRadioLabel}>{leftRadioLabel}</label>
      </div>
      <div>
        <input
          checked={!isChecked}
          type="radio"
          radioGroup={radioGroupName}
          id={rightRadioLabel}
          name={radioGroupName}
          value={rightRadioValue}
          onChange={handleOnChange}
        />
        <label htmlFor={rightRadioLabel}>{rightRadioLabel}</label>
      </div>
    </StyledRadioGroup>
  );
};

export default RadioGroup;
