import s from "./sml.module.css";
import React from "react";
import PropTypes from "prop-types";

class Sml extends React.Component {
  render() {
    const { src, count, onClick } = this.props;
    return (
      <div>
        <img onClick={onClick} className={s.img} src={src} />
        <div>{count}</div>
      </div>
    );
  }
}

Sml.propTypes = {
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sml;