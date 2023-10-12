import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

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
      selected={selected}
      onSelect={handleSelectedClick}
    />
  );
}

export default App;
