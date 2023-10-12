import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //*user menüyü açıp tekrar kapatabilsin diye state'i her zaman tersine çevirmemiz gerekiyor
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      //*hangi option'a tıkladığımı belirlemek için array func. kullanıyorum
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value === null ? "Select.." : value.label}
        <span>
          <BsCaretDownFill />
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full ">
          {renderedOption}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
