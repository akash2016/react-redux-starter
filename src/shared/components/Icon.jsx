import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import IconData from "../static/IconData";
import "../styles/icon.scss";

const SIZE_MULTIPLIER = 1;

const Icon = props => {
  const styles = {
    mainContainer: "ev-plan-choice__icon__main-container",
    iconWrapper: "ev-plan-choice__icon__icon-wrapper",
    circular: "ev-plan-choice__icon__circular"
  };
  const customContainerClass = classNames([
    styles.mainContainer,
    {
      [styles.circular]: props.circular,
      [props.appearance]: !!props.appearance
    }
  ]);

  return (
    props.name && (
      <div
        className={customContainerClass}
        style={{
          backgroundColor: props.bgColor,
          borderColor: props.borderColor,
          width: `${SIZE_MULTIPLIER * props.size}rem`,
          height: `${SIZE_MULTIPLIER * props.size}rem`
        }}
      >
        <div
          className={styles.iconWrapper}
          dangerouslySetInnerHTML={{ __html: IconData[props.name] }}
        />
      </div>
    )
  );
};

Icon.propTypes = {
  circular: PropTypes.bool,
  appearance: PropTypes.string,
  name: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.number
};

Icon.defaultProps = {
  circular: false,
  appearance: "",
  name: "",
  bgColor: "",
  borderColor: "",
  size: 1
};

export default Icon;
