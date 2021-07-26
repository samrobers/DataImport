import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "docNumber", label: "Doc Number", minWidth: 170 },
  { id: "subDate", label: "Submit Date", minWidth: 100 },
  { id: "facilityID", label: "Facility ID", minWidth: 100 },
  { id: "operator", label: "Operator", minWidth: 100 },
  { id: "operatorNumber", label: "Operator Number", minWidth: 100 },
  { id: "facilityType", label: "Facility Type", minWidth: 100 },
  { id: "groundwaterImpact", label: "Groundwater Impacted", minWidth: 100 },
  { id: "surfacewaterImpact", label: "Surfacewater Impacted", minWidth: 100 },
  { id: "closed", label: "Closed", minWidth: 100 },
  { id: "incidentDate", label: "Incident Date", minWidth: 100 },
  { id: "resolutionDate", label: "Resolution Date", minWidth: 100 },
  { id: "latLong", label: "GPS Coordinates", minWidth: 100 },
  { id: "county", label: "County", minWidth: 100 },
  { id: "reportUrl", label: "Report URL", minWidth: 100 },
  { id: "municipality", label: "Municipality", minWidth: 100 },
];
// change this to match oil spill data
function createData(
  docNumber,
  subDate,
  facilityID,
  operator,
  operatorNumber,
  facilityType,
  groundwaterImpact,
  surfacewaterImpact,
  closed,
  incidentDate,
  resolutionDate,
  lat,
  long,
  county,
  reportUrl,
  municipality
) {
  const latLong = `${lat} , ${long}`;
  return {
    docNumber,
    subDate,
    facilityID,
    operator,
    operatorNumber,
    facilityType,
    groundwaterImpact,
    surfacewaterImpact,
    closed,
    incidentDate,
    resolutionDate,
    latLong,
    county,
    reportUrl,
    municipality,
  };
}
// can use this for temp seed data if values are changed
// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
