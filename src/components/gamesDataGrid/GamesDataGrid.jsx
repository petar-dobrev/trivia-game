import { DataGrid } from "@mui/x-data-grid";
import "./gamesDataGrid.css";

function GamesGrid({ rows, columns }) {
  return (
    <div className="gridContainer">
      <DataGrid
        autoHeight
        density="comfortable"
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
}

export default GamesGrid;
