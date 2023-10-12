import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //*user menüyü açıp tekrar kapatabilsin diye state'i her zaman tersine çevirmemiz gerekiyor
    setIsOpen(!isOpen);
  };

  const renderedOption = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Selected..</div>
      {isOpen && <div>{renderedOption}</div>}
    </div>
  );
}

export default Dropdown;
