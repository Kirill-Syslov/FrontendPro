import s from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={s.nav}>
      <div className="https">https://swapi.dev/api/</div>
      <div>
        <input className={s.input} type="text" placeholder="people/1/" />
      </div>
      <div>
        <button className={s.btn}>request</button>
      </div>
    </div>
  );
}

export default Navbar;
