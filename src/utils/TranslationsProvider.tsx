import * as React from "react";
import * as translationsEN from "../translations/translations-en.json";
import * as translationsES from "../translations/translations-es.json";
import { getStorage } from "./localStorageService";
import { darkTheme, lightTheme, ThemeProvider } from "../theme";

export interface IAppContext {
  clockDisplay: string;
  clockModes: {
    hours12: string;
    hours24: string;
  };
  colors: {
    color1: string;
    color2: string;
  };
  interfaceColor: string;
  langCode: string;
  langLabel: string;
  languageEN: string;
  languageES: string;
  nav: {
    chatTabLabel: string;
    settingsTabLabel: string;
  };
  resetButtonLabel: string;
  userName: string;
  ctrlEnterOptionsTitle: string;
  ctrlEnterSendingOptions: {
    option1: string;
    option2: string;
  };
  changeLanguage: () => void;
}

const context = React.createContext<IAppContext | any>(null);

const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export default class TranslationProvider extends React.Component {
  public state = {
    translations: getStorage("lang") !== "de" ? translationsEN : translationsES,
    colorTheme: getStorage("theme") !== "dark" ? lightTheme : darkTheme,
  };

  public render() {
    const { colorTheme } = this.state;

    return (
      <AppContextProvider
        value={{
          state: this.state,
          changeLanguage: this.changeLanguage,
          changeTheme: this.changeTheme,
        }}
      >
        <ThemeProvider theme={colorTheme}>
          {this.props.children as any}
        </ThemeProvider>
      </AppContextProvider>
    );
  }

  private changeTheme = () => {
    this.setState({
      colorTheme: this.state.colorTheme === lightTheme ? darkTheme : lightTheme,
    });
  };

  private changeLanguage = () => {
    this.setState({
      translations:
        this.state.translations.langCode === "ES"
          ? translationsEN
          : translationsES,
    });
  };
}
