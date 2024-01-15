import { useState } from "react";

import Table from "./Table";

function SortableTable(props) {
  //azalan sıra ya da artan sıraya göre sıralamak icin state tutuyoruz
  const [sortOrder, setSortOrder] = useState(null);
  //score ya da name'e göre sıralama yapmak icin state tutuyoruz
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  //sıralama kontrolünün yapıldıgı yer
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder(null);
    } else if (sortOrder === "desc") {
      setSortOrder("asc");
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
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
