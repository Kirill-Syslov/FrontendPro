import { useContext } from "react";
import { ThemeContext, themes } from "./../../../components/app/themContext";

function ChangeColor() {
  const [theme, setThem] = useContext(ThemeContext);
  const onClick = () => {
    if (theme.color === "orange") {
      setThem(themes.green);
    } else {
      setThem(themes.orange);
    }
  };
  return <button onClick={onClick}>Change Style</button>;
}

export default ChangeColor;
