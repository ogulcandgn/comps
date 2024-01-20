import { useEffect, useState } from "react";
import Button from "../components/Button";

function CounterPage({ initialCounter }) {
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>increment</Button>
    </div>
  );
}

export default CounterPage;
