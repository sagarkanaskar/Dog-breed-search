import React from "react";
import DataTable from "react-data-table-component";

export default function TablePuppy(props) {
  const columns = [
      {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Imperial",
      selector: (row) => row.Imperial,
      sortable: true,
    },
    {
      name: "Metric",
      selector: (row) => row.Metric,
      sortable: true,
    },
    {
      name: "Lifespan",
      selector: (row) => row.Lifespan,
      sortable: true,
    },
    {
      name: "Photo",
      selector: (row) => row.Photo,
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={props.suggestions} />
    </div>
  );
}
