import * as React from "react";
import Router from "./router";
import TranslationProvider from "./utils/TranslationsProvider";

class App extends React.Component {
  public render() {
    return (
      <TranslationProvider>
        <Router />
      </TranslationProvider>
    );
  }
}

export default App;
