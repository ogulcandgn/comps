// import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
//use-counter hookunu burada kullandık
import Panel from "../components/Panel";
//immer kütüphanesi
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value";

//reducer kullanımı
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      state.count = state.count + 1;
      return;
    }

    case DECREMENT_COUNT: {
      state.count = state.count - 1;
      return;
    }

    case CHANGE_VALUE: {
      state.addOfvalue = action.payload;
      return;
    }

    case ADD_VALUE_TO_COUNT:
      {
        state.count = state.count + state.addOfvalue;
        state.addOfvalue = 0;
        return;
      }
      throw Error("Error " + action.type);
  }
};

//yukarıdaki useCounter function'unu altta kullanıyoruz
function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [addOfvalue, setAddOfValue] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    addOfvalue: 0,
  });

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const increment = () => {
    //direkt dispatch'deki reducer fonk içine gidecek
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);

    dispatch({
      type: CHANGE_VALUE,
      //reducer'e göndermek istediğimiz değer
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
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
