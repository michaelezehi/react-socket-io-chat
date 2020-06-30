import * as React from "react";
import StyledLanguageSelector from "./styles";
import {
  getStorage,
  storeToLocalStorage,
} from "../../utils/localStorageService";
import { IAppContext } from "../../utils/TranslationsProvider";

export const LanguageSelector: React.FC<{
  translations: IAppContext;
  changeLanguage: () => void;
}> = (props) => {
  const { translations } = props;
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    storeToLocalStorage("lang", e.currentTarget.value);
    props.changeLanguage();
  };
  return (
    <StyledLanguageSelector>
      <label htmlFor="language">{translations.langLabel}</label>
      <select
        id="language"
        onChange={handleLanguageChange}
        defaultValue={getStorage("lang") || "en"}
      >
        <option value="en">{translations.languageEN}</option>
        <option value="de">{translations.languageES}</option>
      </select>
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
