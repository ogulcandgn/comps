// import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
//use-counter hookunu burada kullandık
import Panel from "../components/Panel";

//reducer kullanımı
const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

//yukarıdaki useCounter function'unu altta kullanıyoruz
function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [addOfvalue, setAddOfValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    addOfvalue: 0,
  });

  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  const increment = () => {
    //direkt dispatch'deki reducer fonk içine gidecek
    dispatch({
      type: "increment",
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);

    // setAddOfValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setCount(count + addOfvalue);
    // setAddOfValue(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          onChange={handleChange}
          placeholder="Enter a number"
          value={state.addOfvalue || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
