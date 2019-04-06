import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingContainer from "../landing/views/components/LandingContainer";
import { Header } from "../shared/components";
import "./container-styles.scss";

const Container = () => {
  const styles = {
    mainContainer: "ev-plan-choice__root__main-container",
    contentContainer: "ev-plan-choice__root__content-container"
  };
  const getRoutes = () => (
    <Switch>
      <Route path="/home" component={LandingContainer} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  );

  const getContent = () => (
    <React.Fragment>
      <Header />
      <div className={styles.contentContainer}>{getRoutes()}</div>
    </React.Fragment>
  );
  return <div className={styles.mainContainer}>{getContent()}</div>;
};

export default Container;
