//useCounter hook'unu istedigimiz yerde kullanabiliriz

import { useEffect, useState } from "react";

function useCounter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const descrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return {
    count,
    increment,
    descrement,
    reset,
  };
}

export default useCounter;
