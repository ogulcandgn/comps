import { useState } from "react";

function useSort(data, config) {
  //azalan sıra ya da artan sıraya göre sıralamak icin state tutuyoruz
  const [sortOrder, setSortOrder] = useState(null);
  //score ya da name'e göre sıralama yapmak icin state tutuyoruz
  const [sortBy, setSortBy] = useState(null);

  //sıralama kontrolünün yapıldıgı yer
  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
    }

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

  return { setSortColumn, sortOrder, sortedData, sortBy };
}

export default useSort;
