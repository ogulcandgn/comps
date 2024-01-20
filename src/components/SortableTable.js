import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";

import Table from "./Table";

function SortableTable(props) {
  //azalan sıra ya da artan sıraya göre sıralamak icin state tutuyoruz
  const [sortOrder, setSortOrder] = useState(null);
  //score ya da name'e göre sıralama yapmak icin state tutuyoruz
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  //sıralama kontrolünün yapıldıgı yer
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
            {/* artan ya da azalan sıralamaya göre icon gösterme */}
            {getIcons(column.label, sortBy, sortOrder)}
            <div className="cursor-pointer ml-1.5">{column.label}</div>
          </div>
        </th>
      ),
    };
  });

  //Only sort data if sortOrder && sortBy are not null
  //Make a copy of the 'data' prop
  //Find the correct sortValue function and use it for sorting

  let sortedData = data;

  //sıralama işlemini yapan function
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    //sıralanmıs veriyi güncelleyecegiz
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      //sıralama islemi gerceklesiyor
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <HiArrowsUpDown />;
  }

  if (sortOrder === null) {
    return <HiArrowsUpDown />;
  } else if (sortOrder === "asc") {
    return <FaArrowUp />;
  } else if (sortOrder === "desc") {
    return <FaArrowDown />;
  }
}

export default SortableTable;
