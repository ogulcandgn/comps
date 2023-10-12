import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selection, setSelected] = useState(null);

  //başta null olan selected'ı optionlardan birine tıkladığımız zaman içini doldurur
  const handleSelectedClick = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown
      options={options}
      value={selection}
      onChange={handleSelectedClick}
    />
  );
}

export default App;
