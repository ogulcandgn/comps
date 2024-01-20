import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  //useSort hooklarını ekliyoruz
  const { setSortColumn, sortOrder, sortBy, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center">
            {/* artan ya da azalan sıralamaya göre icon gösterme */}
            {getIcons(column.label, sortBy, sortOrder)}
            <div className="cursor-pointer ml-1.5 hover:bg-gray-100">
              {column.label}
            </div>
          </div>
        </th>
      ),
    };
  });

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
