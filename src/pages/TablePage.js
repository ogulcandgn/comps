import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-green-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Lemon", color: "bg-orange-500", score: 1 },
  ];

  return <Table data={data} />;
}

export default TablePage;
