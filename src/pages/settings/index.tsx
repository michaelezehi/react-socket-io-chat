import * as React from "react";

import ClockModeSelector from "../../components/clock-selector";
import LanguageSelector from "../../components/language-selector";
import ResetButton from "../../components/reset-button";
import ThemeSelector from "../../components/theme-selector";
import SendingOptions from "../../components/send-options";
import UserProfile from "../../components/profile";
import Container from "../container";
import { withTranslations } from "../../utils/withTranslations";
import { IAppContext } from "../../utils/TranslationsProvider";

const SettingsPage = ({
  appContext,
  changeLanguage,
  changeTheme,
}: {
  appContext: IAppContext;
  changeLanguage: () => void;
  changeTheme: () => void;
}) => (
  <Container>
    <UserProfile translations={appContext} />
    <ThemeSelector translations={appContext} changeTheme={changeTheme} />
    <ClockModeSelector translations={appContext} />
    <SendingOptions translations={appContext} />
    <LanguageSelector
      translations={appContext}
      changeLanguage={changeLanguage}
    />
    <ResetButton translations={appContext} />
  </Container>
);

export default withTranslations(SettingsPage as React.FunctionComponent);
