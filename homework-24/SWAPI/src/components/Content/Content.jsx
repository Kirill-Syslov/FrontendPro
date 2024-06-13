import s from "./Content.module.css";

let people = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
};

function Content() {
  return (
    <div className={s.content}>
      <ul className="list-group">
        {Object.entries(people).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{key.replace("_", " ")}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
