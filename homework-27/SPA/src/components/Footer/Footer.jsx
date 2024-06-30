import Error from "../../feature/Error";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={s.footerContainer}>
        <div className={s.text}> Your ad can be here!!!</div>
        <div className={s.err}>
          <Error />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
