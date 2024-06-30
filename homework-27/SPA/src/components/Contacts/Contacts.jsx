import s from "./Contacts.module.css";
import img1 from "../../img/img1.jpg";
import call from "../../img/call.png";
import telegram from "../../img/telegram.png";
import inst from "../../img/inst.jpeg";

import Contact from "./Contact/Contact";

function Contacts() {
  return (
    <div>
      <div className={s.contactsContainer}>
        <div>
          <img className={s.img} src={img1} alt="img" />
        </div>
        <div className={s.contacts}>
          <div className={s.contact}>
            <Contact img={call} content="+0************" />
          </div>
          <div  className={s.contact}>
            <Contact img={telegram} content="#ToDoOrNotToDo" />
          </div>
          <div  className={s.contact}>
            <Contact img={inst} content="@allToDosInYou" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
