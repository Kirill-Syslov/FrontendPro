import PropTypes from "prop-types";
import s from "./sml.module.css";

const Sml = ({ src, count, onClick }) => {
  return (
    <div>
      <img onClick={onClick} className={s.img} src={src} alt="Emoticon" />
      <div>{count}</div>
    </div>
  );
};

Sml.propTypes = {
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sml;
