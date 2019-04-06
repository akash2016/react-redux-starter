import React from "react";
import PropTypes from "prop-types";
import "../styles/loader.scss";
import { Icon } from "./";

const Loader = props => {
  const styles = {
    loader: "ev-plan-choice__loader"
  };
  return (
    <div className={styles.loader}>
      <Icon name="LOADING" size={props.size} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number
};

Loader.defaultProps = {
  size: 2
};

export default Loader;
