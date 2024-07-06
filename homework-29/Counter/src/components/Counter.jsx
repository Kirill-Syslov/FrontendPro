import { useSelector } from "react-redux";

function Counter() {
  const value = useSelector((state) => state.counter.value);  

  return (
    <>
      Clicked :: <span id="value">{value}</span>
    </>
  );
}

export default Counter;
