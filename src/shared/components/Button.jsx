import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../styles/button.scss";

const PlanChoiceButton = props => {
  const styles = {
    mainContainer: "ev-plan-choice__button__main-container",
    pillAppearance: "ev-plan-choice__button__pill-appearance",
    primaryAppearance: "ev-plan-choice__button__primary-appearance",
    normalAppearance: "ev-plan-choice__button__normal-appearance",
    selectedAppearance: "ev-plan-choice__button__selected-appearance"
  };

  const customContainer = classNames([
    styles.mainContainer,
    {
      [styles.pillAppearance]: props.appearance === "pill",
      [styles.primaryAppearance]: props.appearance === "primary",
      [styles.normalAppearance]: props.appearance === "normal",
      [styles.selectedAppearance]: props.appearance === "selected"
    }
  ]);
  return (
    <button className={customContainer} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

PlanChoiceButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  appearance: PropTypes.oneOf(["pill", "primary", "normal", "selected"])
};

PlanChoiceButton.defaultProps = {
  handleClick: () => {},
  children: <div />,
  appearance: "normal"
};

export default PlanChoiceButton;
