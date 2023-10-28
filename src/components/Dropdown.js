import { useState, useEffect, useRef } from "react";
import { BsCaretDownFill, BsCaretLeftFill } from "react-icons/bs";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  //useRef kullanımı
  const divEl = useRef();

  //kullanıcı dropdown'u açarsa ve sayfanın başka bir kısmına tıklarsa dropdown'un kapanmasını sağlayacaktır
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      //kullanıcının dropdown dışında bir yere tıkladığında dropdown'un kapanmasını sağlar.
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    //referansımızı belirledik
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer   "
        onClick={handleClick}
      >
        {value === null ? "Select.." : value.label}
        <span>
          {isOpen ? (
            <BsCaretDownFill className="text-lg" />
          ) : (
            <BsCaretLeftFill className="text-lg" />
          )}
        </span>
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderedOption}</Panel>}
    </div>
  );
}

export default Dropdown;
