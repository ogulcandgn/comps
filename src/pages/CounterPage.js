import { useEffect, useState } from "react";
import Button from "../components/Button";
//use-counter hookunu burada kullandık
import useCounter from "../hooks/use-counter";

//yukarıdaki useCounter function'unu altta kullanıyoruz
function CounterPage({ initialCount }) {
  const { count, increment, descrement, reset } = useCounter({ initialCount });

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={descrement}>descrement</Button>
      <Button onClick={reset}>reset</Button>
    </div>
  );
}

export default CounterPage;
