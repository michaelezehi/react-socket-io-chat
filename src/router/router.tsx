import * as React from "react";
import {
  HashRouter,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import Navigation from "../components/nav-bar";
import ChatPage from "../pages/chat";
import SettingsPage from "../pages/settings";
import { ComponentType } from "react";

// Fix React Router active class setting for redux connected components
const BlockedNavigation = withRouter(
  Navigation as ComponentType<RouteComponentProps>
);

export const AppRouter: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <>
        <BlockedNavigation />
        <Switch>
          <Route exact={true} path="/" component={ChatPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </>
    </HashRouter>
  );
};

export default AppRouter;
