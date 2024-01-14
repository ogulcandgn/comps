function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <div key={column.header}>{column.header()}</div>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(fruit)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={fruit.name}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
