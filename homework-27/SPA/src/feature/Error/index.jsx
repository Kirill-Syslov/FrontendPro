import { useState } from "react";

function Error() {
  const [theme, setTheme] = useState();

  const onClick = () => {
    setTheme({});
  };

  return (
    <>
      <button style={{fontSize:"18px",}} onClick={onClick}>Error Catch</button>
      {theme === undefined ? "" : theme}
    </>
  );
}

export default Error;
