import * as React from "react";
import StyledResetButton from "./styles";
import { clearAll } from "../../utils/localStorageService";
import { IAppContext } from "../../utils/TranslationsProvider";

class ResetButton extends React.Component<{ translations: IAppContext }> {
  public render() {
    const { translations } = this.props;
    return (
      <StyledResetButton>
        <button onClick={this.resetSettings}>
          {translations.resetButtonLabel}
        </button>
      </StyledResetButton>
    );
  }

  private resetSettings = () => clearAll();
}

export default ResetButton;
