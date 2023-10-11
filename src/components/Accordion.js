import { useState } from "react";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState();
  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <AiOutlineDown /> : <AiOutlineLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* ve sembolünde ilk eleman true dönerse ikinci eleman alınır. ilk eleman false dönerse hiç bir şey dönmez */}
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });

  return <div className="">{renderedItems}</div>;
}

export default Accordion;
