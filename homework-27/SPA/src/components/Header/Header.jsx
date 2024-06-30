import s from "./Header.module.css";
import Link from "./../Link/Link";
import ChangeColor from "../../feature/ChangeColor/ui";

function Header() {
  return (
    <header className={s.hed}>
      <ul className={s.list}>
        <li>
          <Link to="main" type="NavLink">
            Main
          </Link>
        </li>
        <li>
          <Link to="contacts" type="NavLink">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="aboutMe" type="NavLink">
            About Me
          </Link>
        </li>
      </ul>
    <ChangeColor/>
    </header>
  );
}

export default Header;
