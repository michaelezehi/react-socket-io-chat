import * as React from "react";
import RadioGroup from "../radio-group";
import StyledClockModeSelector from "./styles";

import { IAppContext } from "../../utils/TranslationsProvider";
import {
  getStorage,
  storeToLocalStorage,
} from "../../utils/localStorageService";

const handleCallback = (val: string): void =>
  storeToLocalStorage("clockMode", val);

const ClockSelector = ({ translations }: { translations: IAppContext }) => (
  <StyledClockModeSelector>
    <label htmlFor="clockMode">{translations.clockDisplay}</label>
    <RadioGroup
      isLeftChecked={getStorage("clockMode") !== "24"}
      radioGroupName={"clockMode"}
      leftRadioLabel={translations.clockModes.hours12}
      leftRadioValue={"12"}
      rightRadioLabel={translations.clockModes.hours24}
      rightRadioValue={"24"}
      callback={handleCallback}
    />
  </StyledClockModeSelector>
);

export default ClockSelector;
