import React from "react";
import PropTypes from "prop-types";
import "../styles/label.scss";

const Label = props => {
  const styles = {
    container: "ev-plan-choice__label-container"
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: [props.bgColor] }}
    >
      {props.children}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  bgColor: PropTypes.string
};

Label.defaultProps = {
  bgColor: "#EDF0F5"
};

export default Label;
