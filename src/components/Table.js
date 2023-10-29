function Table({ data }) {
  const renderedRows = data.map((datas, index) => {
    return (
      <tr key={index}>
        <td className="p-3">{datas.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${datas.color}`}></div>
        </td>
        <td className="p-3">{datas.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
