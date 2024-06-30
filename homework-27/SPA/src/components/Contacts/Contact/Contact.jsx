import s from "./Contact.module.css";
import PropTypes from "prop-types";

function Contact(props) {
  const { img, content } = props;
  return (
    <div className={s.contactContainer}>
      <div>
        <img className={s.img} src={img} alt="img" />
      </div>
      <div>{content}</div>
    </div>
  );
}

Contact.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Contact;
