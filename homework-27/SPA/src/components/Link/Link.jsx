import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../app/themContext";
import { useContext } from "react";


function Link(props) {
const [theme] = useContext(ThemeContext)
  const { to, children, href } = props;
  if (to) {
    return <NavLink to={to} style={{color: theme.color}}>{children}</NavLink>;
  } else {
    return <a href={href} style={{color: theme.color}}>{children}</a>;
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
