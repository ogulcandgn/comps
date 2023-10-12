import { useState } from "react";

function Dropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //*user menüyü açıp tekrar kapatabilsin diye state'i her zaman tersine çevirmemiz gerekiyor
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOption = options.map((option) => {
    return (
      //*hangi option'a tıkladığımı belirlemek için array func. kullanıyorum
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  ahsdhfasdh;
  return (
    <div>
      <div onClick={handleClick}>
        {selected === null ? "Select.." : selected.label}
      </div>
      {isOpen && <div>{renderedOption}</div>}
    </div>
  );
}

export default Dropdown;
