import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPages() {
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
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelectedClick}
      />
    </div>
  );
}

export default DropdownPages;
