import "./App.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        {console.log("headerGroups : ", headerGroups)}
        {/* <table {...getTableProps()}> */}
        <table>
          <thead>
            {headerGroups.map((headerGroup) => (
              // <tr {...headerGroup.getFooterGroupProps()}>
              <tr>
                {headerGroup.headers.map((column) => (
                  // <th {...column.getHeaderProps()}>
                  <th>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          {/* <tbody {...getTableBodyProps()}> */}
          <tbody>
            {rows.map((row) => {
              prepareRow(row);
              return (
                // <tr {...row.getRowProps()}>
                <tr>
                  {row.cells.map((cell) => (
                    // <td {...cell.getCellProps()}>
                    <td>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
