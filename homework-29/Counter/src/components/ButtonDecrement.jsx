import { useDispatch } from "react-redux";
import { counter } from "../core/slice/counterSlice";

function ButtonDecrement() {
  const dispatcher = useDispatch();

  const ocClick = () => {
    dispatcher(counter.actions.decrement());
  };

  return <button onClick={ocClick}>decrement</button>;
}

export default ButtonDecrement;
