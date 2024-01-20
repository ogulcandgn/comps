import { useState } from "react";

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
          {/* artan ya da azalan sıralamaya göre icon gösterme */}
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
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

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return "show both icons";
  }

  if (sortOrder === null) {
    return "show both icons";
  } else if (sortOrder === "asc") {
    return "show up icons";
  } else if (sortOrder === "desc") {
    return "show down icons";
  }
}

export default SortableTable;
