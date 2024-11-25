import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Vulnerability } from "../types";

export const CVETable: React.FC<{
  data?: Vulnerability[];
  styles?: React.CSSProperties;
}> = ({ data, styles }) => {
  return (
    <TableContainer
      sx={{
        ...styles,
      }}
      component={Paper}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "black",
            "& .MuiTableCell-head": {
              fontWeight: "bold",
              color: "white",
            },
          }}
        >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>SourceIdentifier</TableCell>
            <TableCell>Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(({ cve }) => {
            return (
              <TableRow key={cve.id}>
                <TableCell>{cve.id}</TableCell>
                <TableCell>{cve.sourceIdentifier}</TableCell>
                <TableCell>{cve.published}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
