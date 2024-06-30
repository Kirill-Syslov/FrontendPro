import s from "./AboutMe.module.css";
import kettle from "../../img/kettle.png"

function AboutMe() {
  return (
    <div className={s.aboutMeContainer}>
      <div>Error HTTP: 418 </div>
      <img src={kettle} alt="#" />
    </div>
  );
}

export default AboutMe;
