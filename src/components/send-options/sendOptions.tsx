import * as React from "react";
import StyledSendingOptions from "./styles";
import RadioGroup from "../radio-group";
import { IAppContext } from "../../utils/TranslationsProvider";
import {
  getStorage,
  storeToLocalStorage,
} from "../../utils/localStorageService";

const handleCallback = (val: string): void =>
  storeToLocalStorage("ctrlEnterSending", val);

const SendingOptions = ({ translations }: { translations: IAppContext }) => (
  <StyledSendingOptions>
    <label htmlFor="ctrlEnterOptionsTitle">
      {translations.ctrlEnterOptionsTitle}
    </label>
    <RadioGroup
      isLeftChecked={getStorage("ctrlEnterSending") === "On"}
      radioGroupName={"ctrlEnterOptions"}
      leftRadioLabel={translations.ctrlEnterSendingOptions.option1}
      leftRadioValue={translations.ctrlEnterSendingOptions.option1}
      rightRadioLabel={translations.ctrlEnterSendingOptions.option2}
      rightRadioValue={translations.ctrlEnterSendingOptions.option2}
      callback={handleCallback}
    />
  </StyledSendingOptions>
);

export default SendingOptions;
